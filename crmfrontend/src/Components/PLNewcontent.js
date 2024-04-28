import React, { useEffect, useState } from "react";
import crmlogo from "../Images/crmlogo.png";
import sir from "../Images/sir.png";
import homer from "../Images/homer.png";
import homeg from "../Images/homeg.png";
import workforcer from "../Images/workforcer.png";
import workforceg from "../Images/workforceg.png";
import inventoryr from "../Images/inventoryr.png";
import inventoryg from "../Images/inventoryg.png";
import settingr from "../Images/settingr.png";
import settingg from "../Images/settingg.png";
import uparrows from "../Images/uparrows.png";
import "../css/plnew.css";
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../context/useLogout'
import { AuthContext } from "../context/Authcontext";
import login3profile from '../Images/login3profile.png'

function PLNewcontent() {
  const location = window.location.pathname
  const [compColor, setCompColor] = useState({
    color: 'gray'
  })
  const [profilePic, setProfilePic] = useState('')
  const { user } = useAuthContext()

  const { logout } = useLogout()
  const [userData, setUserData] = useState('')
  const navigate = useNavigate()

  const handlelogout = () => {
    logout();
    localStorage.removeItem("user"); // Remove the user item from localStorage
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const fetchData = async () => {
    try {
      let response;
      if (user && user.user.userType === 'Employee') {
        response = await fetch(`http://localhost:4000/employees/getOneEmployee/${user.user._id}`);
        const json = await response.json();
        if (response.ok) {
          setUserData(json)
          setProfilePic(json.profilePic)
        } else {
          console.error(json.error);
        }
      } 
       if (user && user.user.userType === 'Head') {
        response = await fetch(`http://localhost:4000/heads/getOneHead/${user.user._id}`);
        const json = await response.json();
        if (response.ok) {
          setUserData(json)
          setProfilePic(json.profilePic)
        } else {
          console.error(json.error);
        }
      }  
      if (user && user.user.userType === 'Org') {
        response = await fetch(`http://localhost:4000/orgs/getOneOrg/${user.user._id}`);
        const json = await response.json();
        if (response.ok) {
          setUserData(json)
          setProfilePic(json.profilePic)
        } else {
          console.error(json.error);
        }
      }
      
    } catch (error) {
      console.error("Error fetching user data:", error);
      // setError("Error fetching user data. Please try again later.");
    }
  };

  useEffect(() => {
    // if (user) {
      

      fetchData();
    // }
    
  }, [user]);

  const handleClick = (e) => {
    if (location === '/profile/mySpace' && e === 'myspace') {
      setCompColor({
        color: "red"
      })
    } else {
      setCompColor({
        color: "gray"
      })
    }
  }

  function formatDate(dateString) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  }

  return (
    <>
    {user && userData &&
      <div className="newCMain">
        <img src={crmlogo} alt="" />
        <div className="ncMain">
          <div className="nc1">
            <Link to={user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org") ? ('/profile/cbpPer') : ('/profile/')}>
              <img src={profilePic !== '' ? `http://localhost:4000/uploads/${profilePic}` : login3profile} alt="profileImg" className='profileImg'/>
            </Link>
            <div className="executive">
              <img src={userData.userType === "Org" ? uparrows : userData.userType === "Head" ? uparrows : uparrows} alt="uparrows" />
              <p>{userData.userType === "Org" ? "EXECUTIVE" : userData.userType === "Head" ? "HEAD" : "EMPLOYEE"}</p>
            </div>
            <div className="sirName">
              <p>{userData.firstName} {userData.surname}</p>
              <span>Registered on: {formatDate(userData.createdAt)}</span>
            </div>
          </div>
          <div className="nc2">
            <Link to={'/mwis'} className="mySpace" onClick={(e) => handleClick("myspace")}>
              <div className="vrSlide"></div>
              <div className="ncImg">
                <img src={homeg} alt="" />
                <img src={homer} alt="" />
              </div>
              <p style={compColor}>My space</p>
            </Link>
            <Link to={'/mwis/workforce'} className="mySpace" onClick={(e) => handleClick("workforce")}>
              <div className="vrSlide"></div>
              <div className="ncImg">
                <img src={workforceg} alt="" />
                <img src={workforcer} alt="" />
              </div>
              <p>Workforce</p>
            </Link>
            <Link to={'/mwis/inventory'} className="mySpace">
              <div className="vrSlide"></div>
              <div className="ncImg">
                <img src={inventoryg} alt="" />
                <img src={inventoryr} alt="" />
              </div>
              <p>Inventory</p>
            </Link>
            <Link to={'/mwis/settings'} className="mySpace">
              <div className="vrSlide"></div>
              <div className="ncImg">
                <img src={settingg} alt="" />
                <img src={settingr} alt="" />
              </div>
              <p>Settings</p>
            </Link>
          </div>
        </div>
        <button onClick={handlelogout}>Log Out</button>
      </div>
    }
    </>
  );
}

export default PLNewcontent;
