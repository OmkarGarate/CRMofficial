import React from 'react'
import crmlogo from '../Images/crmlogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../context/useLogout'
import PLOldcontent from './PLOldcontent'
import PLNewcontent from './PLNewcontent'

function ProfileLeft() {
  const {user} = useAuthContext()
  const {logout} = useLogout()
  const navigate = useNavigate()
  const handleClick = () => {
    logout();
    localStorage.removeItem("user"); // Remove the user item from localStorage
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  const currentUrl = window.location.pathname
  console.log(currentUrl)
  if(currentUrl === '/profile/')
  {
    console.log('red')
  }else if(currentUrl === '/profile/cbpPer')
  {
    console.log('blue')
  }
  return (
    <>
    <div className="subLogin1 pLHeading">
      <img src={crmlogo} alt="" />
      <Link to={user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org") ? ('/profile/cbpPer') : ('/profile/')}><h1>Complete your<br/> <span>Profile</span> </h1></Link>
      <button onClick={handleClick} className='logoutBtn'>Log out</button>
    </div>
    </>
  )
}

export default ProfileLeft