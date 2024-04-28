import React from 'react'
import Feed from './Feed'
import '../css/myspace.css'
import sir from '../Images/sir.png'

function MySpace() {
  return (
    <div className='mySpaceMain'>
      <div className="msp">
        <div className="status">
          <h2>Status</h2>
          <div className="statusMain">
            <div className="activenow">
              <div className="circles">
              <img src={sir} alt="" />
              <img src={sir} alt="" />
              <img src={sir} alt="" />
              <div className="count">+35</div>
              </div>
              <div className="label">
                <div className="green"></div>
                <p>Active Now</p>
              </div>
            </div>

            <div className="activenow">
              <div className="circles">
              <img src={sir} alt="" />
              <img src={sir} alt="" />
              <img src={sir} alt="" />
              <div className="count">+7</div>
              </div>
              <div className="label">
                <div className="yellow"></div>
                <p>On Break</p>
              </div>
            </div>

            <div className="activenow">
              <div className="circles">
              <img src={sir} alt="" />
              <img src={sir} alt="" />
              <img src={sir} alt="" />
              <div className="count">+2</div>
              </div>
              <div className="label">
                <div className="orange"></div>
                <p>Absent</p>
              </div>
            </div>
          </div>

          {/* status component */}
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