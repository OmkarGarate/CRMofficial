import React from 'react'
import CBPersonalInfo from './CBPersonalInfo'
import CBProfessionalInfo from './CBProfessionalInfo'
import { Outlet } from 'react-router-dom'

function CBRight() {
  return (
    <div className='cbRight'>
      <Outlet/>
      {/* <CBPersonalInfo/> */}
      {/* <CBProfessionalInfo/> */}
    </div>
  )
}

export default CBRight