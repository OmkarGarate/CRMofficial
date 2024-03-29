import React from 'react'
import '../css/profile.css'
import '../css/cb.css'
import ProfileLeft from './ProfileLeft'
import CBRight from './CBRight'

function Profile() {
  return (
    <>
        <div className="profile">
          <div className="profileLeft">
          <ProfileLeft/>
          </div>
          <CBRight/>
        </div>
    
    
    </>
  )
}

export default Profile