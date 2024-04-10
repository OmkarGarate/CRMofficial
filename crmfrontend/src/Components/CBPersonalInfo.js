// import React from 'react'
import React, { useEffect, useState } from 'react';
import rightArrow from '../Images/rgtarrow.png'
import profileDefault from '../Images/login3profile.png'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

function CBPersonalInfo() {
  const {user} = useAuthContext();
  const [isHO, setIsHO] = useState(false)
    const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
    const [pi, setPi] = useState({
      transform: "translateX(-200px)",
    opacity: "0",
      animation: "none"
    })

    useEffect(()=>{
      setTimeout(() => {
        setPi({
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
  const [bloodGroup, setBloodGroup] = useState('')
  const [gender, setGender] = useState('')
  const [religion, setReligion] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')


  useEffect(()=>{

    const fetchData = async ()=>{
      const response = await fetch(`http://localhost:4000/employees/getOneEmployee/${user.user._id}`)

      const json = await response.json()

      if(response.ok)
      {
        setProfilePic(json.profilePic)
        setFirstName(json.firstName)
        setMiddleName(json.middleName)
        setSurname(json.surname)
        setMobileNumber(json.mobileNumber)
        setAlternateMobileNumber(json.alternateMobileNumber)
        setEmail(json.email)
        setAddress(json.address)
        setPinCode(json.pinCode)
        setAge(json.age)
        setBloodGroup(json.bloodGroup)
        setGender(json.gender)
        setReligion(json.religion)
        setDateOfBirth(json.dateOfBirth)
        setMaritalStatus(json.maritalStatus)
      }
    }

    if(user)  
      {
        fetchData()
      }
  }, [user])

const handleSubmit = async(e) =>{
      e.preventDefault()

      const formData = new FormData()
      formData.append(profilePic)
      formData.append(firstName)
      formData.append(middleName)
      formData.append(mobileNumber)
      formData.append(alternateMobileNumber)
      formData.append(email)
      formData.append(address)
      formData.append(pinCode)
      formData.append(age)
      formData.append(bloodGroup)
      formData.append(gender)
      formData.append(religion)
      formData.append(dateOfBirth)
      formData.append(maritalStatus)

      try{
        const response = await fetch(`http://localhost:4000/employees/updateEmployee/${user.user._id}`, {
          method: 'PATCH',
          body: formData
        });
      }catch(error){
          
      }
}

  // console.log("user data: ", user) 

  return (
    <div className='cbpInfo'>
        <div className="cbTop">
            <p>Company Brif</p>
            <img src={rightArrow} alt="rightArrow" style={pi}/>
            <p style={pi}>Personal Info</p>
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
                    <img src={profilePic === '' ? profileDefault : `http://localhost:4000/uploads/${user.user.profilePic}`} alt="profileDefault" />
                    {/* <input type="file" id='uploadImage'/> */}
                    <input
                      type="file"
                      className="form-control-file"
                      name="uploaded_file"
                      onChange={(e) => setProfilePic(e.target.files[0])}
                    />
                    <label htmlFor="uploadImage">Upload Image</label>
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
                <input type="text" placeholder='Nationality'/>
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
                <Link to={'/profile'}><button className='previous'>Previous</button></Link>

              ):(null)}
                <Link to={'/profile/cbprofinfo'}><button className='next'>Next</button></Link>
            </div>
        </form>
    </div>
  )
}

export default CBPersonalInfo