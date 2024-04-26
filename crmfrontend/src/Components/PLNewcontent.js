import React from 'react'
import crmlogo from '../Images/crmlogo.png'
import sir from '../Images/sir.png'
import uparrows from '../Images/uparrows.png'
import '../css/plnew.css'

function PLNewcontent() {
  return (
    <>
    <div className="newCMain">
    <img src={crmlogo} alt="" />
        <div className="nc1">
       
        <img src={sir} alt="" />
        <div className="executive">
            <img src={uparrows} alt="" />
            <p>EXECUTIVE</p>
        </div>
        <div className="sirName">
            <p>Brigitte Jacobs</p>
            <span>Registered on: 18 March 2024</span>
        </div>
        </div>
        <div className="nc2"></div>
    </div>
    </>
  )
}

export default PLNewcontent