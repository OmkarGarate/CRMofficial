import React, { useState } from 'react'
import uparrows from '../Images/uparrows.png'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

function RolesnRes() {
  const navigate = useNavigate()
    const {user} = useAuthContext()
    const location = window.location.pathname;
    const {urlId} = useParams()
  console.log(urlId)
  let parts = ''
  if(location === `/profile/createProf/${urlId}`)
  {
     parts = urlId.split("-");
  }
  
  const [userType, setUserType] = useState(parts[0]);
  const [uId, setUId] = useState(parts[1]);
    const goToPrev = () =>{
        setTimeout(() => {
          if(user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org"))
          {
            navigate('/profile/')
          }
        }, 1000);
      }
    
      // const urlId = userType +"-"+ uId;
    
      const goToNext = () =>{
        setTimeout(() => {
          if(location === `/profile/createProf/` || location === `/profile/createProf/${urlId}`)
        {
          setTimeout(() => {
            navigate(`/profile/createProf/profInfo`)
          }, 1000);
        }else{
          navigate('/profile/editProfInfo')
        }
        }, 1000);
        
      }
  return (
    <form encType="multipart/form-data" method="post" className="persInfoMain docMain">
        <div className="ur">
          <img src={uparrows} alt="uparrows" />
          <h4>Human Resource Head</h4>
        </div>
        <h4>Following are the Roles & Responsibilites to carry out by Head Account</h4>
        <div className="iac">
          <p>In General</p>
          <h4>Give Work Attendance and Write Reports</h4>
          <h4>Follow <Link>'My Work'</Link> in Profile</h4>
        </div>
        <div className="iac">
          <p>Ad Head</p>
          <h4>Create / Edit Profiles</h4>
          <h4>Check Reports</h4>
          <h4>Manage Designation</h4>
        </div>
        <div className="iac">
          <p>Custom Rules</p>
          <h4>None</h4>
        </div>

        <div className="prevNext">

                  <button className='previous' onClick={goToPrev}>Previous</button>
                
                  <button className='next' onClick={goToNext}>
                  {/* <Link to={'/profile/cbprofinfo'}> */}
                    Next
                    {/* </Link> */}
                  </button>
        </div>
    </form>
  )
}

export default RolesnRes