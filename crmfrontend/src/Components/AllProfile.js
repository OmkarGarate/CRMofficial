// import React from "react";
import React, { useState } from 'react'
import plusb from '../Images/plusb.png'
import search from '../Images/search.png'
import head from "../Images/head.png";
import employee from "../Images/employee.png";
import lorna from "../Images/lorna.png";
import email from "../Images/email.png";
import yuan from "../Images/yuan.png";
import dana from "../Images/dana.png";
import akash from "../Images/akash.png";
import '../css/allprofile.css'
import '../css/alldepartment.css'
import '../css/myspace.css'
import { Link } from 'react-router-dom';

function AllProfile() {

    const [btnColor, setBtnColor] = useState({
        color:'#800000',
            border: '2px solid #800000'
    })
    const [btnColor1, setBtnColor1] = useState({
        color:'#767676',
            border: '2px solid #767676'
    })

    const [btnColor2, setBtnColor2] = useState({
        color:'#767676',
            border: '2px solid #767676'
    })

    const [btnColor3, setBtnColor3] = useState({
        color:'#800000',
            border: '2px solid #800000'
    })

    const [btnColor4, setBtnColor4] = useState({
        color:'#767676',
            border: '2px solid #767676'
    })

    const [btnColor5, setBtnColor5] = useState({
        color:'#767676',
            border: '2px solid #767676'
    })

    const [btnColor6, setBtnColor6] = useState({
        color:'#767676',
            border: '2px solid #767676'
    })

    const [btnColor7, setBtnColor7] = useState({
        color:'#767676',
            border: '2px solid #767676'
    })

    const [btnColor8, setBtnColor8] = useState({
        color:'#767676',
            border: '2px solid #767676'
    })
    
    
    const handleBtnColor = () => {
        setBtnColor({
            color:'#800000',
            border: '2px solid #800000'
        })
    
        setBtnColor1({
            color:'#767676',
            border: '2px solid #767676'
        })

        setBtnColor2({
            color:'#767676',
            border: '2px solid #767676'
        })
    }
    
    
    const handleBtnColor1 = () => {
        setBtnColor1({
            color:'#800000',
            border: '2px solid #800000'
        })
    
        setBtnColor({
            color:'#767676',
            border: '2px solid #767676'
        })

        setBtnColor2({
            color:'#767676',
            border: '2px solid #767676'
        })
    }

    const handleBtnColor2 = () => {
        setBtnColor2({
            color:'#800000',
            border: '2px solid #800000'
        })
    
        setBtnColor({
            color:'#767676',
            border: '2px solid #767676'
        })

        setBtnColor1({
            color:'#767676',
            border: '2px solid #767676'
        })
    }


    const handleBtnColor3 = () => {
        setBtnColor3({
            color:'#800000',
            border: '2px solid #800000'
        })
    
        setBtnColor4({
            color:'#767676',
            border: '2px solid #767676'
        })

        setBtnColor5({
            color:'#767676',
            border: '2px solid #767676'
        })
    }

    const handleBtnColor4 = () => {
        setBtnColor4({
            color:'#800000',
            border: '2px solid #800000'
        })
    
        setBtnColor3({
            color:'#767676',
            border: '2px solid #767676'
        })

        setBtnColor5({
            color:'#767676',
            border: '2px solid #767676'
        })
    }

    const handleBtnColor5 = () => {
        setBtnColor5({
            color:'#800000',
            border: '2px solid #800000'
        })
    
        setBtnColor4({
            color:'#767676',
            border: '2px solid #767676'
        })

        setBtnColor3({
            color:'#767676',
            border: '2px solid #767676'
        })
    }

    const handleBtnColor6 = () => {
        setBtnColor6({
            color:'#800000',
            border: '2px solid #800000'
        })
    
        setBtnColor7({
            color:'#767676',
            border: '2px solid #767676'
        })

        setBtnColor8({
            color:'#767676',
            border: '2px solid #767676'
        })
    }

    const handleBtnColor7 = () => {
        setBtnColor7({
            color:'#800000',
            border: '2px solid #800000'
        })
    
        setBtnColor6({
            color:'#767676',
            border: '2px solid #767676'
        })

        setBtnColor8({
            color:'#767676',
            border: '2px solid #767676'
        })
    }

    const handleBtnColor8 = () => {
        setBtnColor8({
            color:'#800000',
            border: '2px solid #800000'
        })
    
        setBtnColor7({
            color:'#767676',
            border: '2px solid #767676'
        })

        setBtnColor6({
            color:'#767676',
            border: '2px solid #767676'
        })
    }


  return (
    <>
      <div className="allProfile allDepartment mySpaceMain">
      <div className="allDepartTop allProfTop">
            <h1>Profiles</h1>
            <div className="createSearch">
              <Link to={'/profile/createProf'}>
            <div className="createDepart">
                <p>Create New</p>
                <img src={plusb} alt="Create" />
            </div>
              </Link>
            <div className="searchDepart">
                <img src={search} alt="Search" />
                <input type="text" placeholder='Search Profiles'/>
            </div>
            </div>
        </div>

        <div className="allDepartBottom allProfBottom">
            <div className="allDSortLeft">
            <div className="allDSort">
                <p>Filter</p>
                <button style={btnColor} onClick={handleBtnColor} >All</button>
                <button style={btnColor1} onClick={handleBtnColor1} >Head Employee</button>
                <button style={btnColor2} onClick={handleBtnColor2} >Employee</button>
            </div>

            <div className="allDSort">
                <p>Sort</p>
                <button style={btnColor3} onClick={handleBtnColor3} >Recently Added</button>
                <button style={btnColor4} onClick={handleBtnColor4} >A to Z</button>
                <button style={btnColor5} onClick={handleBtnColor5} >Z to A</button>
            </div>

            <div className="allDSort">
                <p>Advance Sort</p>
                <button style={btnColor6} onClick={handleBtnColor6} >Absent Today</button>
                <button style={btnColor7} onClick={handleBtnColor7} >Pending Payslip</button>
                <button style={btnColor8} onClick={handleBtnColor8} >Unread Reports</button>
            </div>
            </div>


            <div className="allDContent allPContent">
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

      </div>
    </>
  );
}

export default AllProfile;
