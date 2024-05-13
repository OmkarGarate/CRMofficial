// import React from 'react'
import React, { useEffect, useState } from 'react';
import rightArrow from '../Images/rgtarrow.png'
import profileDefault from '../Images/login3profile.png'
import { Link, Outlet, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import PLNewcontent from './PLNewcontent'
import '../css/createProfile.css'
import PersInfo from './PersInfo';
import emailImg from '../Images/email.png'


function CreateProfile() {
    const {user} = useAuthContext();
  const location = window.location.pathname;
  const navigate = useNavigate()
  const [isHO, setIsHO] = useState(false)
    const [pi, setPi] = useState({
      transform: "translateX(-200px)",
    opacity: "0",
      animation: "none"
    })
    const [pi2, setPi2] = useState({
      transform: "translateX(-200px)",
    opacity: "0",
      animation: "none"
    })

    useEffect(()=>{
      setTimeout(() => {
        setPi({
          animation: "fadeIn 0.3s ease-in-out",
          backgroundColor: "rgb(253, 213, 213)"
        })
        setPi2({
          animation: "fadeIn 0.3s ease-in-out"
        })
      }, 200);
    }, [])

    const handleChange = (event) => {
      setBloodGroup(event.target.value);
    };

  const handleGenderChange = (event) => {
    setGender(event.target.value)
  };

  const handleReligionChange = (event) => {
    setReligion(event.target.value)
  };

  const handleStatusChange = (event) => {
    setMaritalStatus(event.target.value)
  };

  useEffect(()=>{
    if(user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org"))
    {
      setIsHO(!isHO)
    }
  }, [user])

  //update emp logic
  const [profilePic, setProfilePic] = useState('')
  const [pp, setPp] = useState('http://localhost:4000/uploads/login3profile.png')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [surname, setSurname] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [alternateMobileNumber, setAlternateMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [age, setAge] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [gender, setGender] = useState('')
  const [religion, setReligion] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [nationality, setNationality] = useState('')
  const [error, setError] = useState(null)
  const [conf, setConf] = useState('')
  const [profUrl, setProfUrl] = useState('')
  const [hasProf, setHasProf] = useState(false)

  


  const {urlId} = useParams()
  console.log(urlId)
  let parts = ''
  if(location === `/profile/cbpPer/${urlId}`)
  {
     parts = urlId.split("-");
  }
  
  const [userType, setUserType] = useState(parts[0]);
  const [uId, setUId] = useState(parts[1]);
  // const userType = parts[0];
  // const uId = parts[1];

  useEffect(()=>{

    if(location === '/profile/editProfile')
    {
      if(user && user.user.userType === 'Employee')
    {
      const fetchData = async ()=>{
        try {
          const response = await fetch(`http://localhost:4000/employees/getOneEmployee/${user.user._id}`);
          const json = await response.json();
    
          if (response.ok) {
            setProfilePic(json.profilePic);
            console.log("prof2", json.profilePic)
            setFirstName(json.firstName);
            setMiddleName(json.middleName);
            setSurname(json.surname);
            setMobileNumber(json.mobileNumber);
            setAlternateMobileNumber(json.alternateMobileNumber);
            setEmail(json.email);
            setAddress(json.address);
            setPinCode(json.pinCode);
            setNationality(json.nationality);
            setAge(json.age);
            setBloodGroup(json.bloodGroup);
            setGender(json.gender);
            setReligion(json.religion);
            setDateOfBirth(json.dateOfBirth);
            setMaritalStatus(json.maritalStatus);
            
          } else {
            setError(json.error);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setError("Error fetching user data. Please try again later.");
        }
      }
  
      if(user)  
        {
          fetchData();
        }
      }else if(user && user.user.userType === 'Head')
      {
        const fetchData = async ()=>{
          try {
            const response = await fetch(`http://localhost:4000/heads/getOneHead/${user.user._id}`);
            const json = await response.json();
      
            if (response.ok) {
              setProfilePic(json.profilePic);
              console.log("prof2", json.profilePic)
              setFirstName(json.firstName);
              setMiddleName(json.middleName);
              setSurname(json.surname);
              setMobileNumber(json.mobileNumber);
              setAlternateMobileNumber(json.alternateMobileNumber);
              setEmail(json.email);
              setAddress(json.address);
              setPinCode(json.pinCode);
              setNationality(json.nationality);
              setAge(json.age);
              setBloodGroup(json.bloodGroup);
              setGender(json.gender);
              setReligion(json.religion);
              setDateOfBirth(json.dateOfBirth);
              setMaritalStatus(json.maritalStatus);
              
            } else {
              setError(json.error);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
            setError("Error fetching user data. Please try again later.");
          }
        }
    
        if(user)  
          {
            fetchData();
          }
      }else
      {
        const fetchData = async ()=>{
          try {
            const response = await fetch(`http://localhost:4000/orgs/getOneOrg/${user.user._id}`);
            const json = await response.json();
            if (response.ok) {
              setProfilePic(json.profilePic);
              console.log("prof2", json.profilePic)
              setFirstName(json.firstName);
              setMiddleName(json.middleName);
              setSurname(json.surname);
              setMobileNumber(json.mobileNumber);
              setAlternateMobileNumber(json.alternateMobileNumber);
              setEmail(json.email);
              setAddress(json.address);
              setPinCode(json.pinCode);
              setNationality(json.nationality);
              setAge(json.age);
              setBloodGroup(json.bloodGroup);
              setGender(json.gender);
              setReligion(json.religion);
              setDateOfBirth(json.dateOfBirth);
              setMaritalStatus(json.maritalStatus);
              
            } else {
              setError(json.error);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
            setError("Error fetching user data. Please try again later.");
          }
        }
    
        if(user)  
          {
            fetchData();
          }
      } 
    }else{
      if(uId && userType === 'Employee')
    {
      const fetchData = async ()=>{
        try {
          const response = await fetch(`http://localhost:4000/employees/getOneEmployee/${uId}`);
          const json = await response.json();
    
          if (response.ok) {
            setProfilePic(json.profilePic);
            if(json.profilePic)
            {
              setHasProf(true)
            }
            console.log("prof2", hasProf)
            setFirstName(json.firstName);
            setMiddleName(json.middleName);
            setSurname(json.surname);
            setMobileNumber(json.mobileNumber);
            setAlternateMobileNumber(json.alternateMobileNumber);
            setEmail(json.email);
            setAddress(json.address);
            setPinCode(json.pinCode);
            setNationality(json.nationality);
            setAge(json.age);
            setBloodGroup(json.bloodGroup);
            setGender(json.gender);
            setReligion(json.religion);
            setDateOfBirth(json.dateOfBirth);
            setMaritalStatus(json.maritalStatus);
            
          } else {
            setError(json.error);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setError("Error fetching user data. Please try again later.");
        }
      }
  
      if(user)  
        {
          fetchData();
        }
      }else if(uId && userType === 'Head')
      {
        const fetchData = async ()=>{
          try {
            const response = await fetch(`http://localhost:4000/heads/getOneHead/${uId}`);
            const json = await response.json();
      
            if (response.ok) {
              setProfilePic(json.profilePic);
              if(json.profilePic)
            {
              setHasProf(true)
            }
              console.log("prof2", hasProf)
              setFirstName(json.firstName);
              setMiddleName(json.middleName);
              setSurname(json.surname);
              setMobileNumber(json.mobileNumber);
              setAlternateMobileNumber(json.alternateMobileNumber);
              setEmail(json.email);
              setAddress(json.address);
              setPinCode(json.pinCode);
              setNationality(json.nationality);
              setAge(json.age);
              setBloodGroup(json.bloodGroup);
              setGender(json.gender);
              setReligion(json.religion);
              setDateOfBirth(json.dateOfBirth);
              setMaritalStatus(json.maritalStatus);
              
            } else {
              setError(json.error);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
            setError("Error fetching user data. Please try again later.");
          }
        }
    
        if(user)  
          {
            fetchData();
          }
      }
    }

  }, [user, location, uId, userType]);


const handleSubmit = async(e) =>{
      e.preventDefault()

      // console.log("prof2",profilePic)
      const formData = new FormData()
      formData.append("uploaded_file", profilePic)
      formData.append("firstName", firstName)
      formData.append("middleName", middleName)
      formData.append("surname", surname)
      formData.append("mobileNumber", mobileNumber)
      formData.append("alternateMobileNumber", alternateMobileNumber)
      formData.append("email", email)
      formData.append("address", address)
      formData.append("pinCode", pinCode)
      formData.append("nationality", nationality)
      formData.append("age", age)
      formData.append("bloodGroup", bloodGroup)
      formData.append("gender", gender)
      formData.append("religion", religion)
      formData.append("dateOfBirth", dateOfBirth)
      formData.append("maritalStatus", maritalStatus)
      console.log("formdata", formData)

        
      if(userType)
      {
        if(userType === 'Head')
      {
        try {
          const response = await fetch(
            `http://localhost:4000/heads/updateHead/${uId}`
          ,{
            method: 'PATCH',
            body: formData
          });
          const json = await response.json();
          if (!response.ok) {
              setError(json.error);
          } else {
              setError('');
              setConf("Successfully updated the profile's part 1");
              console.log("updated", json);
          }
        } catch (error) {
        console.error("Error during form submission:", error);
        setError("Error during form submission. Please try again later.");
      }
      }else if(userType === 'Employee'){
        try {
          const response = await fetch(
            `http://localhost:4000/employees/updateEmployee/${uId}`
          ,{
            method: 'PATCH',
            body: formData
          });
          const json = await response.json();
          if (!response.ok) {
              setError(json.error);
          } else {
              setError('');
              setConf("Successfully updated the profile's part 1");
              console.log("updated", json);
          }
        } catch (error) {
        console.error("Error during form submission:", error);
        setError("Error during form submission. Please try again later.");
      }
      }
      }else{
        if((user && user.user.userType === "Head"))
      {
        try {
          const response = await fetch(
            `http://localhost:4000/heads/updateHead/${user.user._id}`
          ,{
            method: 'PATCH',
            body: formData
          });
          const json = await response.json();
          if (!response.ok) {
              setError(json.error);
          } else {
              setError('');
              setConf("Successfully updated the profile's part 1");
              console.log("updated", json);
          }
        } catch (error) {
        console.error("Error during form submission:", error);
        setError("Error during form submission. Please try again later.");
      }
      }else if((user && user.user.userType === "Employee")){
        try {
          const response = await fetch(
            `http://localhost:4000/employees/updateEmployee/${user.user._id}`
          ,{
            method: 'PATCH',
            body: formData
          });
          const json = await response.json();
          if (!response.ok) {
              setError(json.error);
          } else {
              setError('');
              setConf("Successfully updated the profile's part 1");
              console.log("updated", json);
          }
        } catch (error) {
        console.error("Error during form submission:", error);
        setError("Error during form submission. Please try again later.");
      }
      }else{
        try {
          const response = await fetch(
            `http://localhost:4000/orgs/updateOrg/${user.user._id}`
          ,{
            method: 'PATCH',
            body: formData
          });
          const json = await response.json();
          if (!response.ok) {
              setError(json.error);
          } else {
              setError('');
              setConf("Successfully updated the profile's part 1");
              console.log("updated", json);
          }
        } catch (error) {
        console.error("Error during form submission:", error);
        setError("Error during form submission. Please try again later.");
      }
      }
      }

      
}

// console.log("up", user.user.profilePic)
  // console.log("user data: ", user) 
  // console.log("dateOfBirth", dateOfBirth)

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
      if(location === `/profile/cbpPer/${urlId}`)
    {
      navigate(`/profile/cbpProfInfo/${urlId}`)
    }else{
      navigate('/profile/editProfInfo')
    }
    }, 1000);
    
  }

console.log(profilePic)


const[atcStyle, setAtcStyle] = useState({
    right: "4px"
})

const handleAtc = ()=>{
    if(atcStyle.right === "4px")
        {
            setAtcStyle({
                right: "28px"
            })
        }else{
            setAtcStyle({
                right: "4px"
            })
        }
}
  return (
    <div className='pbr createProfMain'>
        <div className="profileLeft">
            <PLNewcontent/>
        </div>
    <form className="mwis" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        
        <div className="cprfMain">
            <h2>Create Profile</h2>
            <div className="cpTop">
                <div className="cpProfile">
                    {/* <div className="cppi"> */}
                    
                    {/* </div> */}
                    <div className="upImg">
                    {/* <img src={profileDefault} alt="profileDefault" /> */}

                      {user && user.user.profilePic === '' && profUrl === '' && profilePic === ''? 
                      <img src={
                        pp
                      } alt="" /> 
                      : null
                    }

                    {profilePic === '' && !hasProf ? <img src={
                        pp
                      } alt="" /> 
                      : null}
                  

                    {user && profUrl !=='' ? 
                      <img src={
                        profUrl
                      } alt="" /> 
                      : null
                    }
      
                    {user && profUrl === '' && profilePic != ''? 
                      <img src={
                        `http://localhost:4000/uploads/${profilePic}`
                      } alt="" /> 
                      : null
                    }
                    
                 
              <input
                type="file"
                className="form-control-file" 
                name="uploaded_file"
                onChange={(e) => {
                  setProfilePic(e.target.files[0])
                  setProfUrl(URL.createObjectURL(e.target.files[0]));
                }}
                id='upImg'
              />
              <label htmlFor="upImg">Upload Image</label>
                    </div>
                    <div className="cpm">
                    {/* <div className="cpm"> */}
                        <input type="text" placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                        <input type="text" placeholder='Middle Name' value={middleName} onChange={(e)=>setMiddleName(e.target.value)}/>
                        <input type="text" placeholder='Surname' value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                        </div>
                    {/* </div> */}
                    <div className="whitePatch"></div>
                </div>
                <div className="cawweMain">
                <div className="cawMain">
                    <div className="caw1">
                        <select name="" id="">
                            <option value="">Choose Department</option>
                            <option value="Department 1">Department 1</option>
                            <option value="Department 2">Department 2</option>
                            <option value="Department 3">Department 3</option>
                        </select>
                        <select name="" id="">
                            <option value="">Choose Department</option>
                            <option value="Department 1">Department 1</option>
                            <option value="Department 2">Department 2</option>
                            <option value="Department 3">Department 3</option>
                        </select>
                    </div>
                    <div className="accToFeed">
                        <p>Give Access to <br /> Posting on Feed</p>
                        <input type="checkbox" id='atf'/>
                        <label htmlFor="atf" onClick={handleAtc}>
                            <div className="atfSwitch" style={atcStyle}></div>
                        </label>
                    </div>
                </div>
                <div className="wwe">
                    <img src={emailImg} alt="emailImg" />
                    <input type="text" placeholder='Write Work Email'/>
                </div>
                
                </div>
                
            </div>
            <div className="cpOut">
                <div className="cpoTop">
                    <Link to={'/profile/createProf/'} className="cpOpt">Personal Info</Link>
                    <Link to={'/profile/createProf/profInfo'} className="cpOpt">Professional Info</Link>
                    <Link to={'/profile/createProf/docs'} className="cpOpt">Documents</Link>
                    <Link to={'/profile/createProf/mywork'} className="cpOpt">My Work</Link>
                    <Link to={'/profile/createProf/rolenres'} className="cpOpt">Roles & Responsibilities</Link>
                </div>
                {/* <PersInfo/> */}
                <Outlet/>
            </div>
        </div>
    </form>
    </div>
    
  )
}

export default CreateProfile