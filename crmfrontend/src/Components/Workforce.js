import React from 'react'
import '../css/workforce.css'
import search from '../Images/search.png'
import plus from '../Images/plus.png'
import Designation from './Designation'
import Profiles from './Profiles'

function Workforce() {
  return (
    <>
    <div className="wMain">
      <div className="wTop">
      <div className="searchbar">
        <img src={search} alt="" />
        <input type="text" placeholder='Search Profiles' />
      </div>

      <div className="createprof">
        <img src={plus} alt="" />
        <p>Create Profiles</p>
      </div>
      </div>

      <div className="designation">
      <Designation/>
      <Profiles/>
      </div>


    </div>
    </>
  )
}

export default Workforce