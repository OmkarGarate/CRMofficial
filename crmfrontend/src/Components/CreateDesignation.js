// import React from 'react'
import React, { useState } from "react";
import "../css/createdesignation.css";
import employee from '../Images/employee.png'
import head from '../Images/head.png'
import RREmployee from "./RREmployee";
import RRHead from "./RRHead";

function CreateDesignation() {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [isHeadEmployee, setIsHeadEmployee] = useState(false);
  const [circle, setCircle] = useState({ justifyContent: 'start', transition: '0.5s ease-in-out' });
  const [bgColor, setBgColor] = useState({ backgroundColor: '#ffffff' });

  const handleToggleClick = () => {
    setIsHeadEmployee(prevState => !prevState);
    setCircle({
      justifyContent: isHeadEmployee ? 'start' : 'end',
      transition: '0.5s ease-in-out'
    });
    setBgColor({
      backgroundColor: isHeadEmployee ? '#ffffff' : '#FDD6D5'
    });
  };

  return (
    <>
      <div className="createDesignation mySpaceMain">
        <h1>Create Designation</h1>
        <div className="createDes">
          <div className="createDesLeft">
            <div className="createDesContent">
              <div className="createCLeft">
                <input type="text" placeholder="Designation Name" />
                <input type="text" placeholder="Short Description" />
                <select value={selectedOption} onChange={handleOptionChange}>
                  <option value="Option 1">Department</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
                <div className="ptbf"><p> Position to be filled -<input type="number" /></p></div>
                {/* <div className="cpf"><p>Current position filled - 0</p></div> */}
              </div>
            </div>
            <div className="createCDown">
              <div className="cRgtHeading" style={bgColor}>
                <div className="headingimg">
                  <img className="employeeimg" src={employee} alt="" style={{ display: isHeadEmployee ? 'none' : 'block' }} />
                  <img className="headimg" src={head} alt="" style={{ display: isHeadEmployee ? 'block' : 'none' }} />
                </div>
                <div className="headingp">
                  <p className="hp1" style={{ display: isHeadEmployee ? 'none' : 'block' }}>Employee Position</p>
                  <p className="hp2" style={{ display: isHeadEmployee ? 'block' : 'none' }}>Head Employee Position</p>
                </div>
              </div>
              <div className="cRgtContent">
                <div className="lefttext">
                  <div className="lefttextp">
                    <p className="p1" style={{ display: isHeadEmployee ? 'none' : 'block' }}>Switch To Head Employee Position?</p>
                    <p className="p2" style={{ display: isHeadEmployee ? 'block' : 'none' }}>Switch back To Employee Position?</p>
                  </div>
                  <div className="imain">
                    <i className="i1" style={{ display: isHeadEmployee ? 'none' : 'block' }}>Make this designation to access <br /> Admin features such as Creating profiles, <br /> Managing Reports, and more</i>
                    <i className="i2" style={{ display: isHeadEmployee ? 'block' : 'none' }}>Make this designation to only <br /> Give attendance and write reports</i>
                  </div>
                </div>
                <div className="rgttoggle">
                  <div onClick={handleToggleClick} style={circle} className="toggleoutcircle">
                    <div className="toggleincircle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="createDesRgt">
            {circle.justifyContent === 'start' ? <RREmployee /> : <RRHead />}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateDesignation;
