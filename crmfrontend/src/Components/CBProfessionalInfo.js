// import React from 'react'
import React, { useEffect, useState } from 'react';
import rightArrow from '../Images/rgtarrow.png'
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import PLNewcontent from './PLNewcontent';

function CBProfessionalInfo() {
  const {user} = useAuthContext();
  const location = window.location.pathname;
  const {urlId} = useParams()
  console.log(urlId)
  let parts = ''
  if(location === `/profile/cbpProfInfo/${urlId}`)
  {
     parts = urlId.split("-");
  }
  
  const [userType, setUserType] = useState(parts[0]);
  const [uId, setUId] = useState(parts[1]);

  console.log('dfsdfd', userType, uId)


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
        animation: "fadeIn 0.3s ease-in-out",
      })
    }, 200);
  }, [])

  const [selectedAccommodation, setSelectedAccommodation] = useState('');

  const handleAccommodationChange = (event) => {
    setOptAcc(event.target.value);
  };

  const [selectedEmployeeType, setSelectedEmployeeType] = useState('');

  const handleEmployeeTypeChange = (event) => {
    setEmpType(event.target.value);
  };

  const [selectedSystemUsage, setSelectedSystemUsage] = useState('');

  const handleSystemUsageChange = (event) => {
    setSystemUsage(event.target.value);
  };

//   const handleChange = (event) => {
//     setBloodGroup(event.target.value);
//   };

// const handleGenderChange = (event) => {
//   setGender(event.target.value)
// };

// const handleReligionChange = (event) => {
//   setReligion(event.target.value)
// };

// const handleStatusChange = (event) => {
//   setMaritalStatus(event.target.value)
// };

useEffect(()=>{
  if(user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org"))
  {
    setIsHO(!isHO)
  }
}, [user])

//update emp logic
const [dateOfJoining, setDateOfJoining] = useState('')
const [workExp, setWorkExp] = useState('')
const [prevComp, setPrevComp] = useState('')
const [education, setEducation] = useState('')
const [softSkills, setSoftSkills] = useState('')
const [profSkills, setProfSkills] = useState('')
const [officeEmail, setOfficeEmail] = useState('')
const [optAcc, setOptAcc] = useState('')
const [ofcBranch, setOfcBranch] = useState('')
const [empType, setEmpType] = useState('')
const [currentCTC, setCurrentCTC] = useState('')
const [empBen, setEmpBen] = useState('')
const [dateOfLeave, setDateOfLeave] = useState('')
const [systemUsage, setSystemUsage] = useState('')
const [error, setError] = useState(null)
const [conf, setConf] = useState('')

useEffect(()=>{

  if(userType)
  {
    if(userType === 'Employee')
    {
      const fetchData = async ()=>{
        try {
          const response = await fetch(`http://localhost:4000/employees/getOneEmployee/${uId}`);
          const json = await response.json();
          if (response.ok) {
            setDateOfJoining(json.dateOfJoining)
            setWorkExp(json.workExperience)
            setPrevComp(json.prevCompany)
            setEducation(json.education)
            setSoftSkills(json.softSkills)
            setProfSkills(json.professionalSkills)
            setOfficeEmail(json.officeEmailId)
            setOptAcc(json.accommodation)
            setOfcBranch(json.branch)
            setEmpType(json.employeeType)
            setCurrentCTC(json.currentCTC)
            setEmpBen(json.employeeBenefits)
            setDateOfLeave(json.dateOfLeave)
            setSystemUsage(json.systemUsage)
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
    }else if(userType === 'Head')
    {
      const fetchData = async ()=>{
        try {
          const response = await fetch(`http://localhost:4000/heads/getOneHead/${uId}`);
          const json = await response.json();
          if (response.ok) {
            setDateOfJoining(json.dateOfJoining)
            setWorkExp(json.workExperience)
            setPrevComp(json.prevCompany)
            setEducation(json.education)
            setSoftSkills(json.softSkills)
            setProfSkills(json.professionalSkills)
            setOfficeEmail(json.officeEmailId)
            setOptAcc(json.accommodation)
            setOfcBranch(json.branch)
            setEmpType(json.employeeType)
            setCurrentCTC(json.currentCTC)
            setEmpBen(json.employeeBenefits)
            setDateOfLeave(json.dateOfLeave)
            setSystemUsage(json.systemUsage)
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
    if(user && user.user.userType === 'Employee')
    {
      const fetchData = async ()=>{
        try {
          const response = await fetch(`http://localhost:4000/employees/getOneEmployee/${user.user._id}`);
          const json = await response.json();
          if (response.ok) {
            setDateOfJoining(json.dateOfJoining)
            setWorkExp(json.workExperience)
            setPrevComp(json.prevCompany)
            setEducation(json.education)
            setSoftSkills(json.softSkills)
            setProfSkills(json.professionalSkills)
            setOfficeEmail(json.officeEmailId)
            setOptAcc(json.accommodation)
            setOfcBranch(json.branch)
            setEmpType(json.employeeType)
            setCurrentCTC(json.currentCTC)
            setEmpBen(json.employeeBenefits)
            setDateOfLeave(json.dateOfLeave)
            setSystemUsage(json.systemUsage)
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
            setDateOfJoining(json.dateOfJoining)
            setWorkExp(json.workExperience)
            setPrevComp(json.prevCompany)
            setEducation(json.education)
            setSoftSkills(json.softSkills)
            setProfSkills(json.professionalSkills)
            setOfficeEmail(json.officeEmailId)
            setOptAcc(json.accommodation)
            setOfcBranch(json.branch)
            setEmpType(json.employeeType)
            setCurrentCTC(json.currentCTC)
            setEmpBen(json.employeeBenefits)
            setDateOfLeave(json.dateOfLeave)
            setSystemUsage(json.systemUsage)
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
            setDateOfJoining(json.dateOfJoining)
            setWorkExp(json.workExperience)
            setPrevComp(json.prevCompany)
            setEducation(json.education)
            setSoftSkills(json.softSkills)
            setProfSkills(json.professionalSkills)
            setOfficeEmail(json.officeEmailId)
            setOptAcc(json.accommodation)
            setOfcBranch(json.branch)
            setEmpType(json.employeeType)
            setCurrentCTC(json.currentCTC)
            setEmpBen(json.employeeBenefits)
            setDateOfLeave(json.dateOfLeave)
            setSystemUsage(json.systemUsage)
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

  
}, [user, userType, uId]);

const handleSubmit = async(e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("dateOfJoining", dateOfJoining)
    formData.append("workExperience", workExp)
    formData.append("prevCompany", prevComp)
    formData.append("education", education)
    formData.append("softSkills", softSkills)
    formData.append("professionalSkills", profSkills)
    formData.append("officeEmailId", officeEmail)
    formData.append("accommodation", optAcc)
    formData.append("branch", ofcBranch)
    formData.append("employeeType", empType)
    formData.append("currentCTC", currentCTC)
    formData.append("employeeBenefits", empBen)
    formData.append("dateOfLeave", dateOfLeave)
    formData.append("systemUsage", systemUsage)
    console.log("formdata", formData)

    if(!userType)
    {
      if(user && user.user.userType === "Head")
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
      }else if(user && user.user.userType === "Employee"){
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
    }else{
      if(userType === "Head")
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
      }else if(userType === "Employee"){
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
    }

    
}

// console.log("up", user.user.profilePic)
// console.log("user data: ", user) 

const goToNext = () =>{
  setTimeout(() => {
    navigate('/profile/cbprofinfo')
  }, 1000);
}
const goToPrev = () =>{
  
  setTimeout(() => {
    // if(user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org"))
    // {
    //   navigate('/profile/cbpPer')
    // }else{
    //   navigate('/profile/')
    // }

    if(location === '/profile/editProfInfo')
    {
      navigate('/profile/editProfile')
    }else{
      navigate(`/profile/cbpPer/${urlId}`)
    }
  }, 1000);
}



  return (
    <div className='pbr'>
      <div className="profileLeft">
      <PLNewcontent/>
    </div>
    <div className='cbpInfo'>
        <div className="cbTop">
          <Link to={'/profile/'}><p>Company Brif</p></Link>
            <img src={rightArrow} alt="rightArrow" />
            {/* <Link to={'/profile/cbp'}> */}
              <p>Personal Info</p>
              {/* </Link> */}
            <img src={rightArrow} alt="rightArrow" style={pi2}/>
            {/* <Link to={'cbprofinfo'}> */}
              <p style={pi}>Professional Info</p>
              {/* </Link> */}
            
        </div>
        <form className="cpInMain cpInMainn" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
            <div className="cpms cpmss">
            <div className="cpm">
            <div className="dob">
                    <label htmlFor="">Date of Joining</label>
                    {/* <div className="dobIn"> */}
                        {/* <input type="number" placeholder='DD'/>/
                        <input type="number" placeholder='MM'/>/
                        <input type="number" placeholder='YYYY'/> */}
                        <input type="date" value={dateOfJoining} onChange={(e) => setDateOfJoining(e.target.value)} />
                    {/* </div> */}
                </div>
                <div className="workExp">
                    <p>Work Experience till date</p>
                    <input type="number" value={workExp} onChange={(e)=>setWorkExp(e.target.value)}/>
                </div>
                <input type="text" placeholder='Previous Company/Employer Name' value={prevComp} onChange={(e)=>setPrevComp(e.target.value)}/>
                <input type="text" placeholder='Education' value={education} onChange={(e)=>setEducation(e.target.value)}/>
                <input type="text" placeholder='Soft Skills' value={softSkills} onChange={(e)=>setSoftSkills(e.target.value)}/>
                <input type="text" placeholder='Professional Skills' value={profSkills} onChange={(e)=>setProfSkills(e.target.value)}/>
                <input type="text" placeholder='Office Email ID' value={officeEmail} onChange={(e)=>setOfficeEmail(e.target.value)}/>
            </div>
            <div className="cpm">
            <select id="accommodation" name="accommodation" value={optAcc} onChange={handleAccommodationChange}>
        <option value="">Opted for Accommodation</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
                <input type="text" placeholder='Office Branch'  value={ofcBranch} onChange={(e)=>setOfcBranch(e.target.value)}/>
                <select id="employeeType" name="employeeType" value={empType} onChange={handleEmployeeTypeChange}>
        <option value="">Employee Type</option>
        <option value="fullTime">Full-Time</option>
        <option value="partTime">Part-Time</option>
        <option value="contract">Contract</option>
        <option value="freelance">Freelancer</option>
        <option value="intern">Intern</option>
        <option value="other">Other</option>
      </select>
      <input type="text"  placeholder='Current CTC / Salary' value={currentCTC} onChange={(e)=>setCurrentCTC(e.target.value)}/>
      <input type="text"  placeholder='Employee Benefits' value={empBen} onChange={(e)=>setEmpBen(e.target.value)}/>
                
                
                <div className="dob">
                    <label htmlFor="">Date of Leave</label>
                    {/* <div className="dobIn">
                        <input type="number" placeholder='DD'/>/
                        <input type="number" placeholder='MM'/>/
                        <input type="number" placeholder='YYYY'/>
                    </div> */}
                    <input type="date" value={dateOfLeave} onChange={(e) => setDateOfLeave(e.target.value)} />
                </div>
                <select id="systemUsage" name="systemUsage" value={systemUsage} onChange={handleSystemUsageChange}>
                  <option value="">System Usage</option>
                  <option value="personal">Personal</option>
                  <option value="professional">Professional</option>
                  <option value="both">Both</option>
                  <option value="other">Other</option>
                </select>
            </div>
            </div>
            <div className="prevNext">
            <button className='previous' onClick={goToPrev}>Previous</button>
            <button className='next'>Next</button>
            </div>
            {!error && error!= '' ?(<div className="success">{conf}</div>) : (<div className="error">{error}</div>) }
        </form>
    </div>
    </div>
  )
}

export default CBProfessionalInfo