import React from 'react'
import logo from '../Images/crmlogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='orgNav'>
        <img src={logo} alt="logo" />
        <div className="navComp">
            <p>Already have organisation? </p>
            <Link to={'/'}><button>Login</button></Link>
            
        </div>
    </div>
  )
}

export default Navbar