// import React from 'react'
import React, { useEffect, useState } from 'react';
import rightArrow from '../Images/rgtarrow.png'
import profileDefault from '../Images/login3profile.png'
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import PLNewcontent from './PLNewcontent';
import emailImg from '../Images/email.png';
import useSignupHead from '../hooks/useSignupHead';

function PersInfo() {
    const {user} = useAuthContext();
    // const [urlIdNew, setUrlIdNew] = useState('')
    
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
  

  // useEffect(()=>{
  //   if(user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org"))
  //   {
  //     setIsHO(!isHO)
  //   }
  // }, [user])

  //update emp logic
  // const [profilePic, setProfilePic] = useState('')
  const [pp, setPp] = useState('http://localhost:4000/uploads/login3profile.png')
  // const [firstName, setFirstName] = useState('')
  // const [middleName, setMiddleName] = useState('')
  // const [surname, setSurname] = useState('')
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
  // const [maritalStatus, setMaritalStatus] = useState('')
  const [nationality, setNationality] = useState('')
  const [error, setError] = useState(null)
  const [conf, setConf] = useState('')
  const [userType, setUserType] = useState('');
  // const [profUrl, setProfUrl] = useState('')
  // const [hasProf, setHasProf] = useState(false)

  const handleHEClick = (e) =>{
    setTimeout(() => {
      const urlId = e.userType +"-"+ e._id;
      navigate(`/cprofile/bpPer/${urlId}`)
    }, 1000);
    
  }

  const [createdUser, setCreatedUser] = useState('')
  const [urlId, setUrlId] = useState('')
  




  // const {urlId} = useParams()
  // console.log(urlId)
  
  
  // const [userType, setUserType] = useState(parts[0]);
  const [uId, setUId] = useState('');
  // const [uId, setUId] = useState(parts[1]);
  // const userType = parts[0];
  // const uId = parts[1];

  // let parts = ''
  // useEffect(() => {
  //   if(location === `/profile/createProf/${urlIdNew}`)
  //     {
  //        parts = urlIdNew.split("-");
  //        setUId(parts[1])
  //       setUserType(parts[0])
  //     }
  // }, [location, urlIdNew])

  const {urlIdNew} = useParams()

  useEffect(() => {
    if(urlIdNew)
      {
        const parts = urlIdNew.split("-");
        setUId(parts[1])
        setUserType(parts[0])
      }

    
  }, [urlIdNew])
  
  console.log("urlIdCurrent", userType)
  console.log("urlIdCurrent", uId)
  
  
  // const { user } = useAuthContext();
  // const { signupHead } = useSignupHead();

  const [profilePic, setProfilePic] = useState('');
  // const [pp, setPp] = useState('http://localhost:4000/uploads/login3profile.png');
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

const {urlIdCurrent} = useParams()

// useEffect(()=>{
//   if(createdUser && createdUser.user)
//     {
//       setUrlId(createdUser.user.userType + "-" + createdUser.user._id);
      
//     }else{
//       setUrlId(urlIdCurrent)
//     }
//     setUrlIdNew(urlId);
//     console.log("urlIdsdfd", createdUser.user)
// },[createdUser, createdUser.user, , urlIdCurrent])


console.log("urlId", uId)



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

  useEffect(() => {
    if (user && user.user) {
      setOrgId(user.user.orgId);
    }
  }, [user]);

  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');

  const generateEmployeeId = (firstName) => {
    const maxLength = 7;
    let employeeId = firstName.replace(/\s+/g, '').toUpperCase().slice(0, 3);
    const numNumbers = maxLength - employeeId.length;
    for (let i = 0; i < numNumbers; i++) {
      employeeId += Math.floor(Math.random() * 100);
    }
    return employeeId;
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generatePassword = (firstName) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
    const specialChars = '!@#$%^&*()_+';
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let password = firstName.replace(/\s+/g, '');
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    for (let i = 0; i < 2; i++) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    for (let i = 0; i < 2; i++) {
      password += caps[Math.floor(Math.random() * caps.length)];
    }
    while (password.length < 10) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    return shuffle(password.split('')).join('');
  };

 

  useEffect(() => {
    setEmpId(generateEmployeeId(firstName));
    setPassword(generatePassword(firstName));


    //fetch data

    const fetchData = async ()=>{
      try {
        const response = await fetch(`http://localhost:4000/headsNew/getOneHeadNew/${uId}`)
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
          setEmpId(json.empId);
          setPassword(json.password);
          setUserType(json.userType);
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
   
    if(location === `/profile/createProf/${urlIdNew}`)
      {
        setBtnText('Update')
      }

    // setTimeout(() => {
      if(location === `/profile/createProf/${urlIdNew}` && btnText === 'Update')
        {
          fetchData()
        }
    // }, 1000);
    
    
  }, [firstName, urlIdNew, uId]);



  // useEffect(()=>{

  //   if(location === '/profile/editProfile')
  //   {
  //     if(user && user.user.userType === 'Employee')
  //   {
  //     const fetchData = async ()=>{
  //       try {
  //         const response = await fetch(`http://localhost:4000/employees/getOneEmployee/${user.user._id}`);
  //         const json = await response.json();
    
  //         if (response.ok) {
  //           setProfilePic(json.profilePic);
  //           console.log("prof2", json.profilePic)
  //           setFirstName(json.firstName);
  //           setMiddleName(json.middleName);
  //           setSurname(json.surname);
  //           setMobileNumber(json.mobileNumber);
  //           setAlternateMobileNumber(json.alternateMobileNumber);
  //           setEmail(json.email);
  //           setAddress(json.address);
  //           setPinCode(json.pinCode);
  //           setNationality(json.nationality);
  //           setAge(json.age);
  //           setBloodGroup(json.bloodGroup);
  //           setGender(json.gender);
  //           setReligion(json.religion);
  //           setDateOfBirth(json.dateOfBirth);
  //           setMaritalStatus(json.maritalStatus);
            
  //         } else {
  //           setError(json.error);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching user data:", error);
  //         setError("Error fetching user data. Please try again later.");
  //       }
  //     }
  
  //     if(user)  
  //       {
  //         fetchData();
  //       }
  //     }else if(user && user.user.userType === 'Head')
  //     {
  //       const fetchData = async ()=>{
  //         try {
  //           const response = await fetch(`http://localhost:4000/heads/getOneHead/${user.user._id}`);
  //           const json = await response.json();
      
  //           if (response.ok) {
  //             setProfilePic(json.profilePic);
  //             console.log("prof2", json.profilePic)
  //             setFirstName(json.firstName);
  //             setMiddleName(json.middleName);
  //             setSurname(json.surname);
  //             setMobileNumber(json.mobileNumber);
  //             setAlternateMobileNumber(json.alternateMobileNumber);
  //             setEmail(json.email);
  //             setAddress(json.address);
  //             setPinCode(json.pinCode);
  //             setNationality(json.nationality);
  //             setAge(json.age);
  //             setBloodGroup(json.bloodGroup);
  //             setGender(json.gender);
  //             setReligion(json.religion);
  //             setDateOfBirth(json.dateOfBirth);
  //             setMaritalStatus(json.maritalStatus);
              
  //           } else {
  //             setError(json.error);
  //           }
  //         } catch (error) {
  //           console.error("Error fetching user data:", error);
  //           setError("Error fetching user data. Please try again later.");
  //         }
  //       }
    
  //       if(user)  
  //         {
  //           fetchData();
  //         }
  //     }else
  //     {
  //       const fetchData = async ()=>{
  //         try {
  //           const response = await fetch(`http://localhost:4000/orgs/getOneOrg/${user.user._id}`);
  //           const json = await response.json();
  //           if (response.ok) {
  //             setProfilePic(json.profilePic);
  //             console.log("prof2", json.profilePic)
  //             setFirstName(json.firstName);
  //             setMiddleName(json.middleName);
  //             setSurname(json.surname);
  //             setMobileNumber(json.mobileNumber);
  //             setAlternateMobileNumber(json.alternateMobileNumber);
  //             setEmail(json.email);
  //             setAddress(json.address);
  //             setPinCode(json.pinCode);
  //             setNationality(json.nationality);
  //             setAge(json.age);
  //             setBloodGroup(json.bloodGroup);
  //             setGender(json.gender);
  //             setReligion(json.religion);
  //             setDateOfBirth(json.dateOfBirth);
  //             setMaritalStatus(json.maritalStatus);
              
  //           } else {
  //             setError(json.error);
  //           }
  //         } catch (error) {
  //           console.error("Error fetching user data:", error);
  //           setError("Error fetching user data. Please try again later.");
  //         }
  //       }
    
  //       if(user)  
  //         {
  //           fetchData();
  //         }
  //     } 
  //   }else{
  //     if(uId && userType === 'Employee')
  //   {
  //     const fetchData = async ()=>{
  //       try {
  //         const response = await fetch(`http://localhost:4000/employees/getOneEmployee/${uId}`);
  //         const json = await response.json();
    
  //         if (response.ok) {
  //           setProfilePic(json.profilePic);
  //           if(json.profilePic)
  //           {
  //             setHasProf(true)
  //           }
  //           console.log("prof2", hasProf)
  //           setFirstName(json.firstName);
  //           setMiddleName(json.middleName);
  //           setSurname(json.surname);
  //           setMobileNumber(json.mobileNumber);
  //           setAlternateMobileNumber(json.alternateMobileNumber);
  //           setEmail(json.email);
  //           setAddress(json.address);
  //           setPinCode(json.pinCode);
  //           setNationality(json.nationality);
  //           setAge(json.age);
  //           setBloodGroup(json.bloodGroup);
  //           setGender(json.gender);
  //           setReligion(json.religion);
  //           setDateOfBirth(json.dateOfBirth);
  //           setMaritalStatus(json.maritalStatus);
            
  //         } else {
  //           setError(json.error);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching user data:", error);
  //         setError("Error fetching user data. Please try again later.");
  //       }
  //     }
  
  //     if(user)  
  //       {
  //         fetchData();
  //       }
  //     }else if(uId && userType === 'Head')
  //     {
  //       const fetchData = async ()=>{
  //         try {
  //           const response = await fetch(`http://localhost:4000/headsNew/updateHeadNew/${uId}`);
  //           const json = await response.json();
      
  //           if (response.ok) {
  //             setProfilePic(json.profilePic);
  //             if(json.profilePic)
  //           {
  //             setHasProf(true)
  //           }
  //             console.log("prof2", hasProf)
  //             setFirstName(json.firstName);
  //         setMiddleName(json.middleName);
  //         setSurname(json.surname);
  //         setDesignation(json.designation);
  //         setWorkEmail(json.workEmail);
  //         setAccessToFeed(json.accessToFeed);
  //         setOrgId(json.orgId);
  //         setDepartment(json.department);
  //         setEmpId(json.empId);
  //         setPassword(json.password);
  //         setUserType(json.userType);
  //         setMobileNumber(json.mobileNumber);
  //         setAlternateMobileNumber(json.alternateMobileNumber);
  //         setEmail(json.email);
  //         setAddress(json.address);
  //         setPinCode(json.pinCode);
  //         setNationality(json.nationality);
  //         setAge(json.age);
  //         setBloodGroup(json.bloodGroup);
  //         setGender(json.gender);
  //         setReligion(json.religion);
  //         setDateOfBirth(json.dateOfBirth);
  //         setMaritalStatus(json.maritalStatus);
              
  //           } else {
  //             setError(json.error);
  //           }
  //         } catch (error) {
  //           console.error("Error fetching user data:", error);
  //           setError("Error fetching user data. Please try again later.");
  //         }
  //       }
    
  //       if(user)  
  //         {
  //           fetchData();
  //         }
  //     }
  //   }

  // }, [user, location, uId, userType, btnText]);

  
  const handleSubmit = async (e) => {
   e.preventDefault()

    if(btnText === 'Create')
      {
        handleCreateHead()
      }else{
        handleUpdateHead()
      }
  }

  const handleCreateHead = async () =>{

    try {
      const response = await fetch('http://localhost:4000/headsNew/signupHeadNew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType, mobileNumber, alternateMobileNumber, email, address, pinCode, nationality, age, bloodGroup, gender, religion, dateOfBirth, maritalStatus})
      });

      if (!response.ok) {
        setError('Failed to sign up');

      }

      const json = await response.json();
      // setCreatedUser(json)
      // setUrlIdNew(json.user.userType + "-" + json.user._id);
      navigate(`/profile/createProf/profInfo/${json.user.userType + "-" + json.user._id}`);
      console.log(json);
    } catch (error) {
      console.error('Error during sign up:', error.message);
      setError(error.message);
    }

    if (!error) {
      setConf("Successfully Registered!!")
      setBtnText('Update')
    } else {
      setError(error)
    }

  }

  const handleUpdateHead = async () => {

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('middleName', middleName);
    formData.append('surname', surname);
    formData.append('designation', designation);
    formData.append('workEmail', workEmail);
    formData.append('accessToFeed', accessToFeed);
    formData.append('orgId', orgId);
    formData.append('department', department);
    formData.append('empId', empId);
    formData.append('password', password);
    formData.append('userType', userType);
    formData.append('mobileNumber', mobileNumber);
    formData.append('alternateMobileNumber', alternateMobileNumber);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('pinCode', pinCode);
    formData.append('nationality', nationality);
    formData.append('age', age);
    formData.append('bloodGroup', bloodGroup);
    formData.append('gender', gender);
    formData.append('religion', religion);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('maritalStatus', maritalStatus);
    // formData.append('upload', profilePic);

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
          navigate(`/profile/createProf/profInfo/${json.userType + "-" + json._id}`);
      }

    } catch (error) {
    console.error("Error during form submission:", error);
    setError("Error during form submission. Please try again later.");
  }

  } 

  

  const goToPrev = () =>{
    setTimeout(() => {
      if(user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org"))
      {
        navigate('/profile/')
      }
    }, 1000);
  }

  // const urlId = userType +"-"+ uId;

  
console.log("urslerIDD", urlIdNew)
  const goToNext = () => {

      // console.log("urlIdsdfd", createdUser.user)
  
    // If nextPage is "Yes", proceed with navigation
    // if (nextPage === "Yes") {
      setTimeout(() => {
        // Check the current location and navigate accordingly
        // if (location === `/profile/createProf`) {
          // setTimeout(() => {
            // Navigate to the next page
            navigate(`/profile/createProf/profInfo/${urlIdNew}`);
            // console.log("navigate", `/profile/createProf/profInfo/${urlIdNew}`)
          // }, 1000);
        // } else {
          // Navigate to a different page
          // navigate('/profile/editProfInfo');
        // }
      }, 1000);
    // } else {
    //   // If nextPage is "No", set an error
    //   setError(nextPage);
    // }
  };
  

  return (
    // <form encType="multipart/form-data" method="post" onSubmit={handleSubmit} className="persInfoMain">
      
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
                  name="upload"
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
                  {urlId ? 
                  <Link to={`/profile/createProf/${urlId}`} className="cpOpt">Personal Info</Link> :

                  <Link to={'/profile/createProf'} className="cpOpt">Personal Info</Link>
                }
                  
              {/* <Link to={'/profile/createProf/'} className="cpOpt">Personal Info</Link> */}
              <Link to={`/profile/createProf/profInfo/${urlId}`} className="cpOpt">Professional Info</Link>
              <Link to={'/profile/createProf/docs'} className="cpOpt">Documents</Link>
              <Link to={'/profile/createProf/mywork'} className="cpOpt">My Work</Link>
              <Link to={'/profile/createProf/designationnres'} className="cpOpt">designations & Responsibilities</Link>
            </div>
            <div className='pbr createProfMain'>
      <div className="persInfoMain">
        <div  className='cpms'>
        <div className='cpm'>
                <input type="text" placeholder='Mobile Number' value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
                <input type="text" placeholder='Alternate Mobile Number' value={alternateMobileNumber} onChange={(e)=>setAlternateMobileNumber(e.target.value)}/>
                <input type="text" placeholder='Email ID' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder='Residential Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <input type="text" placeholder='PIN code' value={pinCode} onChange={(e)=>setPinCode(e.target.value)}/>
                <input type="text" placeholder='Nationality'value={nationality} onChange={(e)=>setNationality(e.target.value)}/>
            </div>
            <div className="cpm">
                <div className="abg">
                    <input type="text" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
                    <select className='bldg' value={bloodGroup} onChange={handleChange} >
                      <option value="">Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                </div>
                {/* <div className="abg genRel"> */}
                    <select name="" id="" value={gender} onChange={handleGenderChange}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                    
                {/* </div> */}
                <select name="" id="" value={religion} onChange={handleReligionChange}>
                      <option value="">Religion</option>
                      <option value="christianity">Christianity</option>
                      <option value="islam">Islam</option>
                      <option value="hinduism">Hinduism</option>
                      <option value="buddhism">Buddhism</option>
                      <option value="sikhism">Sikhism</option>
                      <option value="judaism">Judaism</option>
                      <option value="other">Other</option>
                    </select>
                <div className="dob">
                    <label htmlFor="">Date of Birth</label>
                    {/* <div className="dobIn">
                        <input type="number" placeholder='DD' value={dd} onChange={(e)=>{
                          setDd(e.target.value)
                          setDateOfBirth(dd +"-"+ mm +"-"+ yy)
                        }
                        }/>/
                        <input type="number" placeholder='MM' value={mm} onChange={(e)=>{
                          setMm(e.target.value)
                          setDateOfBirth(dd +"-"+ mm +"-"+ yy)
                        }
                      }/>/
                        <input type="number" placeholder='YYYY' value={yy} onChange={(e)=>{
                          setYy(e.target.value)
                          setDateOfBirth(dd +"-"+ mm +"-"+ yy)
                          }}/>
                    </div> */}
                    <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>
                <select name="" id="" className='marStat' value={maritalStatus} onChange={handleStatusChange}>
                    <option value="">Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                    <option value="separated">Separated</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
          
            <div className="prevNext">
                {/* <button>Previous</button> */}
              {/* {isHO ? (
                // <Link to={'/profile'}>
                  <button className='previous' onClick={goToPrev}>Previous</button>
                  // </Link>

              ):(null)} */}
                
                  <button className='next'>
                  {/* <Link to={'/profile/cbprofinfo'}> */}
                    {btnText}
                    {/* </Link> */}
                  </button>
                  
                {/* <button className='next'>Next</button> */}
                {/* {!error && error!= '' ?(<div className="success">{conf}</div>) : (<div className="error">{error}</div>) } */}
            </div>
      </div>
      
    </div>
            {!error && error!= '' ?(<div className="success">{conf}</div>) : (<div className="error">{error}</div>) }
          </div>
        </div>
      </form>
    </div>


     
    // </form>
  )
}

export default PersInfo