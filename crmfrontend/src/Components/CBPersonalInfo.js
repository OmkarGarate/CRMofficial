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
    };

    const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };


  const [selectedReligion, setSelectedReligion] = useState('');

  const handleReligionChange = (event) => {
    setSelectedReligion(event.target.value);
  };

  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  useEffect(()=>{
    if(user.user.role === "Human Resource Head2" || user.user.userType === "Org")
    {
      setIsHO(!isHO)
    }
  }, [user])

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
        <form className="cpInMain">
            <div className="cpms">
            <div className="cpm">
                <div className="upImg">
                    <img src={profileDefault} alt="profileDefault" />
                    <input type="file" id='uploadImage'/>
                    <label htmlFor="uploadImage">Upload Image</label>
                </div>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Middle Name'/>
                <input type="text" placeholder='Surname'/>
                <input type="text" placeholder='Mobile Number'/>
                <input type="text" placeholder='Alternate Mobile Number'/>
                <input type="text" placeholder='Email ID'/>
            </div>
            <div className="cpm">
                <input type="text" placeholder='Residential Address'/>
                <input type="text" placeholder='PIN code'/>
                <input type="text" placeholder='Nationality'/>
                <div className="abg">
                    <input type="text" placeholder='Age'/>
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