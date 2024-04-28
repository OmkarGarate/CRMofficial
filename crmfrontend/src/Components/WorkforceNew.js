import React from 'react'
import search from '../Images/search.png'
import plus from '../Images/plus.png'
import DesignationNew from './DesignationNew'
import ProfilesNew from './ProfilesNew'
import '../css/workforceNew.css'
import { Outlet } from 'react-router-dom'
import AllPositions from './AllPositions'
import AllProfiles from './AllProfiles'


function WorkforceNew() {
  return (
    <div className="mwis">
        <div className='mySpaceMain workforceMain'>
        <div className="searchAndCp">
            <div className="searchProfile">
                <img src={search} alt="search" />
                <input type="text" placeholder='Search Profiles'/>
            </div>
            <button>
                <img src={plus} alt="plus" />
                <p>Create Profiles</p>
            </button>
        </div>
        <DesignationNew/>
        <ProfilesNew/>
        {/* <Outlet/> */}
    </div>
    </div>
    
  )
}

export default WorkforceNew