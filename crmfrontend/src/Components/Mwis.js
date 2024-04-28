import React from 'react'
import PLNewcontent from './PLNewcontent'
import { Outlet } from 'react-router-dom'

function Mwis() {
  return (
    <div className='pbr'>
        <div className="profileLeft">
      
        <PLNewcontent/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Mwis