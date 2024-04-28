import React from 'react'
import profileDefault from '../Images/login3profile.png'
import uparrows from '../Images/uparrows.png'

function AllProfiles() {
  return (
    <div className='allProfilesMain'>
      <div className="allProf">
          <img src={profileDefault} alt="profileDefault" className='apImg'/>
          <div className="pn">
            <img src={uparrows} alt="uparrows" />
            <p>Lorna Benson</p>
          </div>
          <p className='apRole'>Human Resource Head</p>
      </div>
      <div className="allProf">
          <img src={profileDefault} alt="profileDefault" className='apImg'/>
          <div className="pn">
            <img src={uparrows} alt="uparrows" />
            <p>Lorna Benson</p>
          </div>
          <p className='apRole'>Human Resource Employee</p>
      </div>
      <div className="allProf">
          <img src={profileDefault} alt="profileDefault" className='apImg'/>
          <div className="pn">
            <img src={uparrows} alt="uparrows" />
            <p>Lorna Benson</p>
          </div>
          <p className='apRole'>Human Resource Head</p>
      </div>
      <div className="allProf">
          <img src={profileDefault} alt="profileDefault" className='apImg'/>
          <div className="pn">
            <img src={uparrows} alt="uparrows" />
            <p>Lorna Benson</p>
          </div>
          <p className='apRole'>Human Resource Employee</p>
      </div>

    </div>
  )
}

export default AllProfiles