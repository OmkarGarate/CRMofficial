import React from 'react'
import '../css/rr.css'

function RREmployee() {
  return (
    <>
    <div className="rrEmployee">
        <div className="rrHeading">
            <h3>Roles & Responsibilities</h3>
        </div>
        <div className="generalmain">
            <p>General</p>
            <div className="gcontent">
            <p>Give Work Attendance and Write Reports</p>
            <p>Follow <span>‘My Work’</span> in Profile</p>
            </div>
        </div>
        <div className="customrules">
            <p>Custom Rules</p>
            <input type="text" name="" id="" placeholder='Write' />
        </div>
        <div className="saveBtn">
            <button>Save</button>
        </div>
        </div>
    </>
  )
}

export default RREmployee