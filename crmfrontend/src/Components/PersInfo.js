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

  const {urlId} = useParams()
  // console.log(urlId)
  
  
  // const [userType, setUserType] = useState(parts[0]);
  const [uId, setUId] = useState('');
  // const [uId, setUId] = useState(parts[1]);
  // const userType = parts[0];
  // const uId = parts[1];

  let parts = ''
  if(location === `/profile/createProf/${urlId}`)
  {
     parts = urlId.split("-");
     setUId(parts[1])
    setUserType(parts[0])
  }
  // const { user } = useAuthContext();
  const { signupHead } = useSignupHead();

  const [profilePic, setProfilePic] = useState('');
  // const [pp, setPp] = useState('http://localhost:4000/uploads/login3profile.png');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [surname, setSurname] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  
  const [accessToFeed, setaccessToFeed] = useState("false");
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
            setaccessToFeed("false")
        }else{
            setAtcStyle({
                right: "4px"
            })
            setaccessToFeed("true")
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
  }, [firstName]);

  useEffect(()=>{
    if(location === `/profile/createProf/${urlId}`)
      {
        setBtnText('Update')
      }

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

  }, [user, location, uId, userType, btnText]);

  
  const handleSubmit = async (e) =>{
    e.preventDefault()

    await signupHead(firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType);

    if(!error){
        setConf("Successfully Registered!!")
    }else{
      setError(error)
    }
}

  const [cnText, setCnText] = useState('Next');
  useEffect(()=>{
    if(location === `/profile/createProf/${urlId}`)
      {
        setCnText('Next');
      }else{
        setCnText('Create');
      }
  }, [cnText])
  

  const goToPrev = () =>{
    setTimeout(() => {
      if(user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org"))
      {
        navigate('/profile/')
      }
    }, 1000);
  }

  // const urlId = userType +"-"+ uId;

  const goToNext = () => {
  
    // If nextPage is "Yes", proceed with navigation
    // if (nextPage === "Yes") {
      setTimeout(() => {
        // Check the current location and navigate accordingly
        if (location === `/profile/createProf` || location === `/profile/createProf/${urlId}`) {
          setTimeout(() => {
            // Navigate to the next page
            navigate(`/profile/createProf/profInfo/${urlId}`);
          }, 1000);
        } else {
          // Navigate to a different page
          navigate('/profile/editProfInfo');
        }
      }, 1000);
    // } else {
    //   // If nextPage is "No", set an error
    //   setError(nextPage);
    // }
  };
  

  return (
    // <form encType="multipart/form-data" method="post" onSubmit={handleSubmit} className="persInfoMain">
      
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
                
                  <button className='next' onClick={goToNext}>
                  {/* <Link to={'/profile/cbprofinfo'}> */}
                    {btnText}
                    {/* </Link> */}
                  </button>
                  
                {/* <button className='next'>Next</button> */}
                {!error && error!= '' ?(<div className="success">{conf}</div>) : (<div className="error">{error}</div>) }
            </div>
      </div>
      
    </div>
    // </form>
  )
}

export default PersInfo