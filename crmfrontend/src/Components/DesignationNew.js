import React, { useState } from 'react'
import AllPositions from './AllPositions'
import { Link, Outlet } from 'react-router-dom'
import HeadPositions from './HeadPositions'
import EmployeePositions from './EmployeePositions'

function DesignationNew() {
    const [comp, setComp] = useState('all')
    const [compStyle, setCompStyle] = useState({
        border: "1px solid #800000",
        backgroundColor: "white"
    })
    
    const handleClick = (e) =>{
        setComp(e)
    }
  return (
    <div className='desMain'>
        <h1>Designation</h1>
        <div className="ahe">
                <button onClick={(e)=>handleClick('all')} style={comp === 'all' ? compStyle : null }>All</button>
                <button onClick={(e)=>handleClick('headPos')} style={comp === 'headPos' ? compStyle : null}>Head Positions</button>
                <button onClick={(e)=>handleClick('empPos')} style={comp === 'empPos' ? compStyle : null}>Employee Positions</button>
        </div>

        {comp === 'all' ? <AllPositions/>: comp === 'headPos' ? <HeadPositions/> : <EmployeePositions/>}

    </div>
  )
}

export default DesignationNew