import React from 'react'
import search from '../Images/search.png'
import plus from '../Images/plus.png'
import DesignationNew from './DesignationNew'
import ProfilesNew from './ProfilesNew'
import '../css/workforceNew.css'
import { Outlet } from 'react-router-dom'
import AllPositions from './AllPositions'
import AllProfiles from './AllProfiles'
import ClockMain from './ClockMain'
import Departments from './Departments'


function WorkforceNew() {
  return (
    <div className="mwis">
        <div className='mySpaceMain workforceMain'>
        <div className="searchAndCp">
            <div className="searchProfile">
                <img src={search} alt="search" />
                <input type="text" placeholder='Search Profiles'/>
            </div>
            {/* <ClockMain/>   */}
        </div>
        <div className="desprof">
        <DesignationNew/>
        <ProfilesNew/>
        </div>
        <Departments/>
        {/* <Outlet/> */}
    </div>
    </div>
    
  )
}

export default WorkforceNew