import React from 'react'
// import '../css/createdesignation.css'
import '../css/viewdesignation.css'
import "../css/createdesignation.css";
import head from '../Images/head.png'
import lorna from "../Images/lorna.png";
import email from "../Images/email.png";
import '../css/allprofile.css'
import '../css/alldepartment.css'
import '../css/myspace.css'



function ViewDesignation() {
  return (
    <>
    <div className="createDesignation mySpaceMain">
        <h1>View Designation</h1>
        
        <div className="viewWhiteMain">
            <div className="whiteTop">
                <div className="topOne">
                    <p>Human Resource</p>
                   <div className="vdMix"><img src={head} alt="head" /> <h3>Human Resource Manager</h3></div>
                    <i>Short Description</i>
                </div>
                <div className="topTwo">
                    <p>Position to be filled -&nbsp;&nbsp;&nbsp;&nbsp; 2</p>
                    <p>Current position filled - 1</p>
                </div>
                <div className="topThree"> <button>Edit</button> </div>
            </div>
            <div className="whiteBottom">
                <h3>Roles & Responsibilities</h3>
                <div className="bottomMain">
                    <div className="bottomOne">
                        <p>In General</p>
                        <p>Follow ‘My Work’ in Profile <br /> Follow ‘My Work’ in Profile </p>
                    </div>
                    <div className="bottomTwo">
                        <p>As Head</p>
                        <p>Create / Edit Profile <br />Check Reports <br />Manage Designation </p>
                    </div>
                    <div className="bottomThree">
                        <p>Custom Rules</p>
                        <p>1) ncowu woichoien cwiejhoinaoj cwoeincoiwnoc</p>
                    </div>
                </div>
            </div>
        </div>

<div className="viewProfile">
    <h3>Profiles</h3>
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
</div>

      </div>
    </>
  )
}

export default ViewDesignation