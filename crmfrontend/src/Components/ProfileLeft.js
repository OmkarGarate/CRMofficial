import React from 'react'
import crmlogo from '../Images/crmlogo.png'
import { Link } from 'react-router-dom'

function ProfileLeft() {
  return (
    <>
    <div className="subLogin1 pLHeading">
      <img src={crmlogo} alt="" />
    <h1>Complete your<br/> <span>Profile</span> </h1>
    </div>
    </>
  )
}

export default ProfileLeft