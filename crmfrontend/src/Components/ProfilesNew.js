import React, { useState } from "react";
import plusb from "../Images/plusb.png";
import rgtarrow from "../Images/rgtarrow.png";
import head from "../Images/head.png";
import employee from "../Images/employee.png";
import lorna from "../Images/lorna.png";
import email from "../Images/email.png";
import yuan from "../Images/yuan.png";
import dana from "../Images/dana.png";
import akash from "../Images/akash.png";
import { Link } from "react-router-dom";
// import AllPositions from './AllPositions'
// import { Link, Outlet } from 'react-router-dom'
// import AllProfiles from './AllProfiles'
// import HeadEmployees from './HeadEmployees'
// import Employees from './Employees'

function ProfilesNew() {
  // const [comp, setComp] = useState('all')
  // const [compStyle, setCompStyle] = useState({
  //     border: "1px solid #800000",
  //     backgroundColor: "white"
  // })

  //     const handleClick = (e) =>{
  //         setComp(e)
  //     }
  return (
    // <div className='desMain'>
    //     <h1>Profiles</h1>
    //     <div className="ahe">
    //         {/* <Link to={'/mwis/workforce/'}> */}
    //             <button onClick={(e)=>handleClick('all')} style={comp === 'all' ? compStyle : null }>All</button>
    //         {/* </Link> */}
    //         {/* <Link to={'/mwis/workforce/headEmp'}> */}
    //             <button onClick={(e)=>handleClick('headEmp')} style={comp === 'headEmp' ? compStyle : null }>Head Employee</button>
    //         {/* </Link> */}
    //         {/* <Link to={'/mwis/workforce/emp'}> */}
    //             <button onClick={(e)=>handleClick('emp')} style={comp === 'emp' ? compStyle : null }>Employee</button>
    //         {/* </Link> */}
    //     </div>
    //     {/* <AllProfiles/> */}
    //     {/* <Outlet/> */}

    //     {comp === 'all' ? <AllProfiles/>: comp === 'headEmp' ? <HeadEmployees/> : <Employees/>}
    // </div>

    <>
      <div className="designationMain">
        <div className="desTopbar">
          <h1>Profiles</h1>
          <Link  to={'/profile/createProf'}>
            <div className="plusimg">
              <img src={plusb} alt="Create" />
            </div>
          </Link>
          <Link to={'/mwis/allprofile'} className="viewall">
            <p>View All</p>
            <img src={rgtarrow} alt="View All" />
          </Link>
        </div>

        <div className="desBottom profBottom">
          <div className="prof1">
          <div className="whiteBoxTop">
            <div className="whiteBoxSmall">
              <img src={lorna} alt="Lorna Benson" />
            </div>
            <div className="colorBox">
              <div className="head">
                <img src={head} alt="Head" />
                </div>
                <div className="email">
                  <img src={email} alt="Email" />
                </div>
              
            </div>
          </div>
          <div className="whiteBoxMain">
            <div className="boxContent">
              <div className="boxC1">
                <h4>Lorna Benson</h4>
                <div className="green"></div>
              </div>
              <h4 className="h4gray">Human Resource Head</h4>
            </div>
          </div>

          </div>

          <div className="prof1">
          <div className="whiteBoxTop">
            <div className="whiteBoxSmall">
              <img src={yuan} alt="Yuan Ning" />
            </div>
            <div className="colorBox">
              <div className="head">
                <img src={head} alt="Head" />
                </div>
                <div className="email">
                  <img src={email} alt="Email" />
                </div>
              
            </div>
          </div>
          <div className="whiteBoxMain">
            <div className="boxContent">
              <div className="boxC1">
                <h4>Yuan Ning</h4>
                <div className="green"></div>
              </div>
              <h4 className="h4gray">Project Head</h4>
            </div>
          </div>

          </div>

          <div className="prof1">
          <div className="whiteBoxTop">
            <div className="whiteBoxSmall">
              <img src={dana} alt="Dana" />
            </div>
            <div className="colorBox">
              <div className="head">
                <img src={employee} alt="Employee" />
                </div>
                <div className="email">
                  <img src={email} alt="Email" />
                </div>
              
            </div>
          </div>
          <div className="whiteBoxMain">
            <div className="boxContent">
              <div className="boxC1">
                <h4>Dana Osborn</h4>
                <div className="green"></div>
              </div>
              <h4 className="h4gray">IT Engineer</h4>
            </div>
          </div>

          </div>

          <div className="prof1">
          <div className="whiteBoxTop">
            <div className="whiteBoxSmall">
              <img src={akash} alt="Akash" />
            </div>
            <div className="colorBox">
              <div className="head">
                <img src={employee} alt="Employee" />
                </div>
                <div className="email">
                  <img src={email} alt="Email" />
                </div>
              
            </div>
          </div>
          <div className="whiteBoxMain">
            <div className="boxContent">
              <div className="boxC1">
                <h4>Akash Kurian</h4>
                <div className="green"></div>
              </div>
              <h4 className="h4gray">SP3D Designer</h4>
            </div>
          </div>

          </div>

          

          
          
        </div>
      </div>
    </>
  );
}

export default ProfilesNew;
