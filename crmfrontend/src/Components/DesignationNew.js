import React, { useState } from 'react'
import plusb from '../Images/plusb.png'
import rgtarrow from '../Images/rgtarrow.png'
import head from '../Images/head.png'
import employee from '../Images/employee.png'
import { Link } from 'react-router-dom'
// import AllPositions from './AllPositions'
// import { Link, Outlet } from 'react-router-dom'
// import HeadPositions from './HeadPositions'
// import EmployeePositions from './EmployeePositions'

function DesignationNew() {
    // const [comp, setComp] = useState('all')
    // const [compStyle, setCompStyle] = useState({
    //     border: "1px solid #800000",
    //     backgroundColor: "white"
    // })
    
    // const handleClick = (e) =>{
    //     setComp(e)
    // }
  return (
    // <div className='desMain'>
    //     <h1>Designation</h1>
    //     <div className="ahe">
    //             <button onClick={(e)=>handleClick('all')} style={comp === 'all' ? compStyle : null }>All</button>
    //             <button onClick={(e)=>handleClick('headPos')} style={comp === 'headPos' ? compStyle : null}>Head Positions</button>
    //             <button onClick={(e)=>handleClick('empPos')} style={comp === 'empPos' ? compStyle : null}>Employee Positions</button>
    //     </div>

    //     {comp === 'all' ? <AllPositions/>: comp === 'headPos' ? <HeadPositions/> : <EmployeePositions/>}

    // </div>

    <>
    <div className="designationMain">
      <div className="desTopbar">
        <h1>Designations</h1>
        <Link to={'/mwis/createdesignation'} className="plusimg"><img src={plusb} alt="Create" /></Link>
        <Link to={'/mwis/alldesignation'} className="viewall">
          <p>View All</p>
          <img src={rgtarrow} alt="View All" />
        </Link>
      </div>

      <div className="desBottom desBMain">
        <div className="desBox1">
          <div className="boxTop">
            <img src={head} alt="Head" />
            <span>1</span>
            <p>:</p>
            <p>2</p>
          </div>
          <div className="boxBottom">
          Human Resource Head
          </div>
        </div>
        <div className="desBox1">
          <div className="boxTop">
            <img src={employee} alt="Employee" />
            <span>3</span>
            <p>:</p>
            <p>7</p>
          </div>
          <div className="boxBottom">
          SP3D <br /> Designer
          </div>
        </div>
        <div className="desBox1">
          <div className="boxTop">
            <img src={head} alt="Head" />
            <span>5</span>
            <p>:</p>
            <p>7</p>
          </div>
          <div className="boxBottom">
          E3D <br /> Designer
          </div>
        </div>
        <div className="desBox1">
          <div className="boxTop">
            <img src={head} alt="Head" />
            <span>8</span>
            <p>:</p>
            <p>8</p>
          </div>
          <div className="boxBottom">
          Draftsman
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DesignationNew