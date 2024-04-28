import React from 'react'
import '../css/profile.css'
import '../css/cb.css'
import ProfileLeft from './ProfileLeft'
import CBRight from './CBRight'
import PLNewcontent from './PLNewcontent'

function Profile() {
  return (
    <>
        <div className="profile">
          {/* <div className="profileLeft">
          <PLNewcontent/>
          </div> */}
          <CBRight/>
        </div>
    
    
    </>
  )
}

export default Profile