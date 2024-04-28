import React, { useState } from 'react'
import AllPositions from './AllPositions'
import { Link, Outlet } from 'react-router-dom'
import AllProfiles from './AllProfiles'
import HeadEmployees from './HeadEmployees'
import Employees from './Employees'

function ProfilesNew() {
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
        <h1>Profiles</h1>
        <div className="ahe">
            {/* <Link to={'/mwis/workforce/'}> */}
                <button onClick={(e)=>handleClick('all')} style={comp === 'all' ? compStyle : null }>All</button>
            {/* </Link> */}
            {/* <Link to={'/mwis/workforce/headEmp'}> */}
                <button onClick={(e)=>handleClick('headEmp')} style={comp === 'headEmp' ? compStyle : null }>Head Employee</button>
            {/* </Link> */}
            {/* <Link to={'/mwis/workforce/emp'}> */}
                <button onClick={(e)=>handleClick('emp')} style={comp === 'emp' ? compStyle : null }>Employee</button>
            {/* </Link> */}
        </div>
        {/* <AllProfiles/> */}
        {/* <Outlet/> */}

        {comp === 'all' ? <AllProfiles/>: comp === 'headEmp' ? <HeadEmployees/> : <Employees/>}
    </div>
  )
}

export default ProfilesNew