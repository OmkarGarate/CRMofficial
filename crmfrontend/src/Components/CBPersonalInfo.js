// import React from 'react'
import React, { useEffect, useState } from 'react';
import rightArrow from '../Images/rgtarrow.png'
import profileDefault from '../Images/login3profile.png'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

function CBPersonalInfo() {
  const {user} = useAuthContext();
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

  useEffect(()=>{

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
    

  }, [user]);


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

  const goToNext = () =>{
    setTimeout(() => {
      navigate('/profile/cbprofinfo')
    }, 1000);
  }
console.log(profilePic)
  return (
    <div className='cbpInfo'>
        <div className="cbTop">
          <Link to={'/profile/'}><p>Company Brif</p></Link>
            <img src={rightArrow} alt="rightArrow" style={pi2}/>
            {/* <Link to={'/profile/'}> */}
              <p style={pi}>Personal Info</p>
              {/* </Link> */}
            
            {/* <img src={rightArrow} alt="rightArrow" />
            <p>Professional Info</p>
            <img src={rightArrow} alt="rightArrow" />
            <p>Documents</p> */}
        </div>
        <form className="cpInMain" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
            <div className="cpms">
            <div className="cpm">
            <div className="upImg">
                {/* <img src={
                  user.user.profilePic === "" && profUrl === "" ? 
                  profileDefault : 
                  profUrl !== "" ? 
                  profUrl : 
                  `http://localhost:4000/uploads/${user.user.profilePic}`
                } 
                  alt="profileDefault" 
                /> */}
              
              {user && user.user.profilePic === '' && profUrl === '' && profilePic === ''? 
                <img src={
                  pp
                } alt="" /> 
                : null
              }

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
                <input type="text" placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" placeholder='Middle Name' value={middleName} onChange={(e)=>setMiddleName(e.target.value)}/>
                <input type="text" placeholder='Surname' value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                <input type="text" placeholder='Mobile Number' value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
                <input type="text" placeholder='Alternate Mobile Number' value={alternateMobileNumber} onChange={(e)=>setAlternateMobileNumber(e.target.value)}/>
                <input type="text" placeholder='Email ID' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="cpm">
                <input type="text" placeholder='Residential Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <input type="text" placeholder='PIN code' value={pinCode} onChange={(e)=>setPinCode(e.target.value)}/>
                <input type="text" placeholder='Nationality'value={nationality} onChange={(e)=>setNationality(e.target.value)}/>
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
                <div className="abg genRel">
                    <select name="" id="" value={gender} onChange={handleGenderChange}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
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
                </div>
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
        </form>
    </div>
  )
}

export default CBPersonalInfo