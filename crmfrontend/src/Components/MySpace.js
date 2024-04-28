import React from 'react'
import Feed from './Feed'
import '../css/myspace.css'

function MySpace() {
  return (
    <div className='mySpaceMain'>
      <div className="msp">
        <div className="status">
          <h2>Status</h2>
        </div>
        <Feed/>
      </div>
      <div className="dashboard">
        <h2>Dashboard</h2>
      </div>
    </div>
    
  )
}

export default MySpace