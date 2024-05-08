// import React from 'react'
import React, { useEffect, useState } from 'react';
import rightArrow from '../Images/rgtarrow.png'
import profileDefault from '../Images/login3profile.png'
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import PLNewcontent from './PLNewcontent';

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
  return (
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
  )
}

export default PersInfo