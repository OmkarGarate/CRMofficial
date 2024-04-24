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
    const [selectedBloodGroup, setSelectedBloodGroup] = useState(user.user.bloodGroup);
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
      setSelectedBloodGroup(event.target.value);
      setBloodGroup(event.target.value)
    };

    const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    setGender(event.target.value)
  };


  const [selectedReligion, setSelectedReligion] = useState('');

  const handleReligionChange = (event) => {
    setSelectedReligion(event.target.value);
    setReligion(event.target.value)
  };

  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    setMaritalStatus(event.target.value)
    // console.log(maritalStatus)
  };

  useEffect(()=>{
    if(user.user.role === "Human Resource Head2" || user.user.userType === "Org")
    {
      setIsHO(!isHO)
    }
  }, [user])

  //update emp logic
  const [profilePic, setProfilePic] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [surname, setSurname] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [alternateMobileNumber, setAlternateMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [age, setAge] = useState('')
  const [bloodGroup, setBloodGroup] = useState(selectedBloodGroup)
  const [gender, setGender] = useState('')
  const [religion, setReligion] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [nationality, setNationality] = useState('')
  const [error, setError] = useState(null)
  const [conf, setConf] = useState('')
  const [profUrl, setProfUrl] = useState('')


  useEffect(()=>{

    const fetchData = async ()=>{
      try {
        const response = await fetch(`http://localhost:4000/employees/getOneEmployee/${user.user._id}`);
        const json = await response.json();
  
        if (response.ok) {
          setProfilePic(user.user.profilePic);
          console.log("prof2", profilePic)
          setFirstName(user.firstName);
          setMiddleName(user.middleName);
          setSurname(user.surname);
          setMobileNumber(user.mobileNumber);
          setAlternateMobileNumber(user.alternateMobileNumber);
          setEmail(user.email);
          setAddress(user.address);
          setPinCode(user.pinCode);
          setNationality(user.nationality);
          setAge(user.age);
          setBloodGroup(user.bloodGroup);
          setGender(user.gender);
          setReligion(user.religion);
          setDateOfBirth(user.dateOfBirth);
          setMaritalStatus(user.maritalStatus);
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
  }, [user, user.user]);

const handleSubmit = async(e) =>{
      e.preventDefault()

      console.log("prof2",profilePic)
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

      try {
        const response = await fetch(`http://localhost:4000/employees/updateEmployee/${user.user._id}`, {
            method: 'PATCH',
            body: formData
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        } else {
            setError(null);
            setConf("Successfully updated the profile's part 1");
            console.log("updated", json);
        }
    } catch (error) {
        console.error("Error during form submission:", error);
        setError("Error during form submission. Please try again later.");
    }
}

// console.log("up", user.user.profilePic)
  console.log("user data: ", user) 

  const goToNext = () =>{
    setTimeout(() => {
      navigate('/profile/cbprofinfo')
    }, 1000);
  }

  console.log(profUrl)

  return (
    <div className='cbpInfo'>
        <div className="cbTop">
          <Link to={'/profile/'}><p>Company Brif</p></Link>
            <img src={rightArrow} alt="rightArrow" style={pi2}/>
            <Link to={'/profile/cbp'}><p style={pi}>Personal Info</p></Link>
            
            {/* <img src={rightArrow} alt="rightArrow" />
            <p>Professional Info</p>
            <img src={rightArrow} alt="rightArrow" />
            <p>Documents</p> */}
        </div>
        <form className="cpInMain" encType="multipart/form-data"
          method="post" onSubmit={handleSubmit}>
            <div className="cpms">
            <div className="cpm">
            <div className="upImg">
              <img src={
                // user.user.profilePic === "" && profUrl === "" ? 
                // profileDefault : 
                // profUrl !== "" ? 
                // profUrl : 
                `http://localhost:4000/uploads/${user.user.profilePic}`} 
                alt="profileDefault" 
              />

              {/* <img src={`http://localhost:4000/uploads/${user.user.profilePic}`} alt="" /> */}
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
                    <select className='bldg' value={selectedBloodGroup} onChange={handleChange} >
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
                    <select name="" id=""  value={selectedGender} onChange={handleGenderChange}>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                    <select name="" id="" value={selectedReligion} onChange={handleReligionChange}>
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
                    <div className="dobIn">
                        <input type="number" placeholder='DD'/>/
                        <input type="number" placeholder='MM'/>/
                        <input type="number" placeholder='YYYY'/>
                    </div>
                </div>
                <select name="" id="" className='marStat'  value={selectedStatus} onChange={handleStatusChange}>
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
                <Link to={'/profile'}>
                  <button className='previous'>Previous</button>
                  </Link>

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