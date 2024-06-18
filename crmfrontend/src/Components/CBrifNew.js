import React, { useEffect, useState } from 'react'
import PLNewcontent from './PLNewcontent'
import { Link } from 'react-router-dom';
import '../css/cbrifNew.css'
import cbUImg from '../Images/uploadImage.png'

function CBrifNew() {
    const [ pi, setPi] = useState({
        transform: "translateX(-200px)",
        opacity: "0",
        animation: "none",
        backgroundColor: '#fdd5d5'
      });

      useEffect(() => {
        setTimeout(() => {
          setPi({
            animation: "fadeIn 0.3s ease-in-out",
            backgroundColor: "rgb(253, 213, 213)"
          })
        }, 200);
    })
  return (
    <div className="pbr">
        <div className="profileLeft">
      <PLNewcontent/>
    </div>
    <div className="cbpInfo">

      
      <div className="cbTop">
        <Link to={'/profile/'}><p style={pi}>Company Brif</p></Link>
      </div>
      {/* <div className="cbNew"> */}
        <form action="" className="cbNew">
            <div className="cbnComps">
                <p>Company Logo</p>
                <input type="file" id='cbLogo'/>
                <label htmlFor="cbLogo">
                    <img src={cbUImg} alt="cbUImg" />
                    <p>Upload Image</p>
                </label>
            </div>
            <div className="cbnComps">
                <p>Company Name</p>
                <input type="text" />
            </div>
            <div className="cbnComps">
                <p>About Company</p>
                <textarea ></textarea>
            </div>
            <div className="cbnComps">
                <p>Website</p>
                <input type="text" />
            </div>
            <button>Save changes</button>
        </form>
      {/* </div> */}
      </div>
    </div>
  )
}

export default CBrifNew