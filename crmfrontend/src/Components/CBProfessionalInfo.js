// import React from 'react'
import React, { useEffect, useState } from 'react';
import rightArrow from '../Images/rgtarrow.png'
import { Link } from 'react-router-dom';

function CBProfessionalInfo() {

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

  const [selectedAccommodation, setSelectedAccommodation] = useState('');

  const handleAccommodationChange = (event) => {
    setSelectedAccommodation(event.target.value);
  };

  const [selectedEmployeeType, setSelectedEmployeeType] = useState('');

  const handleEmployeeTypeChange = (event) => {
    setSelectedEmployeeType(event.target.value);
  };

  const [selectedSystemUsage, setSelectedSystemUsage] = useState('');

  const handleSystemUsageChange = (event) => {
    setSelectedSystemUsage(event.target.value);
  };


  return (
    <>
    <div className='cbpInfo'>
        <div className="cbTop">
            <p>Company Brif</p>
            <img src={rightArrow} alt="rightArrow" />
            <p>Personal Info</p>
            <img src={rightArrow} alt="rightArrow" style={pi}/>
            <p style={pi}>Professional Info</p>
        </div>
        <form className="cpInMain cpInMainn">
            <div className="cpms cpmss">
            <div className="cpm">
            <div className="dob">
                    <label htmlFor="">Date of Joining</label>
                    <div className="dobIn">
                        <input type="number" placeholder='DD'/>/
                        <input type="number" placeholder='MM'/>/
                        <input type="number" placeholder='YYYY'/>
                    </div>
                </div>
                <div className="workExp">
                    <p>Work Experience till date</p>
                    <input type="number" />
                </div>
                <input type="text" placeholder='Previous Company/Employer Name'/>
                <input type="text" placeholder='Education'/>
                <input type="text" placeholder='Soft Skills'/>
                <input type="text" placeholder='Professional Skills'/>
                <input type="text" placeholder='Office Email ID'/>
            </div>
            <div className="cpm">
            <select id="accommodation" name="accommodation" value={selectedAccommodation} onChange={handleAccommodationChange}>
        <option value="">Opted for Accommodation</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
                <input type="text" placeholder='Office Branch'/>
                <select id="employeeType" name="employeeType" value={selectedEmployeeType} onChange={handleEmployeeTypeChange}>
        <option value="">Employee Type</option>
        <option value="fullTime">Full-Time</option>
        <option value="partTime">Part-Time</option>
        <option value="contract">Contract</option>
        <option value="freelance">Freelance</option>
        <option value="intern">Intern</option>
        <option value="other">Other</option>
      </select>
      <input type="text"  placeholder='Current CTC / Salary'/>
      <input type="text"  placeholder='Employee Benefits'/>
                
                
                <div className="dob">
                    <label htmlFor="">Date of Leave</label>
                    <div className="dobIn">
                        <input type="number" placeholder='DD'/>/
                        <input type="number" placeholder='MM'/>/
                        <input type="number" placeholder='YYYY'/>
                    </div>
                </div>
                <select id="systemUsage" name="systemUsage" value={selectedSystemUsage} onChange={handleSystemUsageChange}>
        <option value="">System Usage</option>
        <option value="personal">Personal</option>
        <option value="professional">Professional</option>
        <option value="both">Both</option>
        <option value="other">Other</option>
      </select>
            </div>
            </div>
            <div className="prevNext">
            <Link to={'/profile/'}><button className='previous'>Previous</button></Link>
            <Link><button className='next'>Next</button></Link>
            </div>
        </form>
    </div>
    </>
  )
}

export default CBProfessionalInfo