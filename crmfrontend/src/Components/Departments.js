import React from 'react'
import plusb from '../Images/plusb.png'
import rgtarrow from '../Images/rgtarrow.png'
import head from '../Images/head.png'
import employee from '../Images/employee.png'
import '../css/workforce.css'
import { Link } from 'react-router-dom'

function Departments() {
  return (
    <div className="designationMain departMain">
      <div className="desTopbar departTopbar">
        <h1>Departments</h1>
        {/* <div className="plusimg"><img src={plusb} alt="Create" /></div> */}
        <Link to={'/mwis/alldepartment'} className="viewall">
          <p>View All</p>
          <img src={rgtarrow} alt="View All" />
        </Link>
      </div>

      <div className="desBottom departBottom">
        <i>Over 50+, Department is pre added list to categorise your relevant designation while creating designation and are related towards profile.</i>
        <div className="viewall">
          <p>Start Creating New Designation</p>
          <img src={rgtarrow} alt="View All" />
        </div>
      </div>
    </div>
  )
}

export default Departments