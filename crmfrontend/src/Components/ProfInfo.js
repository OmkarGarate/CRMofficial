// import React from 'react'
import React, { useEffect, useState } from 'react';
import rightArrow from '../Images/rgtarrow.png'
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import PLNewcontent from './PLNewcontent';
import emailImg from '../Images/email.png';


function ProfInfo() {
    const {user} = useAuthContext();
  const location = window.location.pathname;
  const {urlIdNew} = useParams()
  console.log("profInfoUrl",location)
  let parts = ''
  if(location === `/profile/createProf/profInfo/${urlIdNew}`)
  {
     parts = urlIdNew.split("-");
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

const [profilePic, setProfilePic] = useState('');
  const [pp, setPp] = useState('http://localhost:4000/uploads/login3profile.png');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [surname, setSurname] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [accessToFeed, setAccessToFeed] = useState(false);
  const [orgId, setOrgId] = useState('');
  const [profUrl, setProfUrl] = useState('')
  const [hasProf, setHasProf] = useState(false)
  const [btnText, setBtnText] = useState('Create')

  const handleUserType = (event) => setUserType(event.target.value);
  const handleDes = (event) => setDesignation(event.target.value);
  const handleDep = (event) => setDepartment(event.target.value);

  const[atcStyle, setAtcStyle] = useState({
    right: "4px"
})

const handleAtc = ()=>{
  if(atcStyle.right === "4px")
      {
          setAtcStyle({
              right: "28px"
          })
          setAccessToFeed(false)
      }else{
          setAtcStyle({
              right: "4px"
          })
          setAccessToFeed(true)
      }
}

console.log("uidProf", uId)

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
          const response = await fetch(`http://localhost:4000/headsNew/getOneHeadNew/${uId}`);
          const json = await response.json();
          if (response.ok) {
            setFirstName(json.firstName);
            setMiddleName(json.middleName);
            setSurname(json.surname);
            setDesignation(json.designation);
            setWorkEmail(json.workEmail);
            setAccessToFeed(json.accessToFeed);
            setOrgId(json.orgId);
            setDepartment(json.department);
            setUserType(json.userType);

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
            `http://localhost:4000/headsNew/updateHeadNew/${user.user._id}`
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
            `http://localhost:4000/headsNew/updateHeadNew/${uId}`
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
    navigate(`/profile/createProf/docs/${urlIdNew}`)
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

    // if(location === '/profile/editProfInfo')
    // {
    //   navigate('/profile/editProfile')
    // }else{
      navigate(`/profile/createProf/${urlIdNew}`)
    // }
  }, 1000);
}


  return (
    <div className='pbr createProfMain'>
      <div className="profileLeft">
        <PLNewcontent />
      </div>
      <form className="mwis" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        <div className="cprfMain">
          <h2>Create Profile</h2>
          <div className="cpTop">
            <div className="cpProfile">
              <div className="upImg">
                {user && user.user.profilePic === '' && profUrl === '' && profilePic === '' ? 
                  <img src={pp} alt="" /> 
                  : null
                }
                {profilePic === '' && !hasProf ? <img src={pp} alt="" /> : null}
                {user && profUrl !== '' ? <img src={profUrl} alt="" /> : null}
                {user && profUrl === '' && profilePic !== '' ? 
                  <img src={`http://localhost:4000/uploads/${profilePic}`} alt="" /> 
                  : null
                }
                <input
                  type="file"
                  className="form-control-file"
                  name="uploaded_file"
                  onChange={(e) => {
                    setProfilePic(e.target.files[0]);
                    setProfUrl(URL.createObjectURL(e.target.files[0]));
                  }}
                  id='upImg'
                />
                <label htmlFor="upImg">Upload Image</label>
              </div>
              <div className="cpm">
                <input type="text" placeholder='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input type="text" placeholder='Middle Name'
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
                <input type="text" placeholder='Surname'
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                <select name="" id="" className='marStat'
                  value={userType} onChange={handleUserType}
                >
                  <option value="">UserType</option>
                  <option value="Employee">Employee</option>
                  <option value="Head">Head</option>
                </select>
              </div>
              <div className="whitePatch"></div>
            </div>
            <div className="cawweMain">
              <div className="cawMain">
                <div className="caw1">
                  <select name="" id=""
                    value={department} onChange={handleDep}
                  >
                    <option value="">Choose Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  <select name="" id=""
                    value={designation} onChange={handleDes}
                  >
                    <option value="">Assign Designation</option>
                    <option value="Human Resource Head1">Human Resource Head1</option>
                    <option value="Human Resource Head2">Human Resource Head2</option>
                    <option value="Human Resource Head3">Human Resource Head3</option>
                  </select>
                </div>
                <div className="accToFeed">
                  <p>Give Access to <br /> Posting on Feed</p>
                  <input type="checkbox" id='atf' />
                  <label htmlFor="atf" onClick={handleAtc}>
                    <div className="atfSwitch" style={atcStyle}></div>
                  </label>
                </div>
              </div>
              <div className="wwe">
                <img src={emailImg} alt="emailImg" />
                <input type="text" placeholder='Write Work Email'
                  value={workEmail} onChange={(e) => setWorkEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="cpOut">
            <div className="cpoTop">
                  {urlIdNew ? 
                  <Link to={`/profile/createProf/${urlIdNew}`} className="cpOpt">Personal Info</Link> :

                  <Link to={'/profile/createProf'} className="cpOpt">Personal Info</Link>
                }
                  
              {/* <Link to={'/profile/createProf/'} className="cpOpt">Personal Info</Link> */}
              <Link to={`/profile/createProf/profInfo/${urlIdNew}`} className="cpOpt">Professional Info</Link>
              <Link to={'/profile/createProf/docs'} className="cpOpt">Documents</Link>
              <Link to={'/profile/createProf/mywork'} className="cpOpt">My Work</Link>
              <Link to={'/profile/createProf/designationnres'} className="cpOpt">designations & Responsibilities</Link>
            </div>
            <div className="persInfoMain">
        <div  className='cpms'>
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
                {/* <button>Previous</button> */}
              {isHO ? (
                // <Link to={'/profile'}>
                  <button className='previous' onClick={goToPrev}>Previous</button>
                  // </Link>

              ):(null)}
                
                  <button className='next' onClick={goToNext}>
                  {/* <Link to={'/profile/cbprofinfo'}> */}
                    Next
                    {/* </Link> */}
                    </button>
                  
                {/* <button className='next'>Next</button> */}
                {!error && error!= '' ?(<div className="success">{conf}</div>) : (<div className="error">{error}</div>) }
            </div>
    </div>
            {!error && error!= '' ?(<div className="success">{conf}</div>) : (<div className="error">{error}</div>) }
          </div>
        </div>
      </form>
    </div>
   
  )
}

export default ProfInfo