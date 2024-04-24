import React, { useEffect, useState } from 'react';
import rightArrow from '../Images/rgtarrow.png';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSignupHead } from '../hooks/useSignupHead';
import CBrif from './CBrif';
import CBPersonalInfo from './CBPersonalInfo';


function DRP() {
  const { user } = useAuthContext();
  const [ud, setUd] = useState(false);
  const location = useLocation()
  

  useEffect(()=>{
    if(user && user.user)
  {
    setUd(true)
  }
  }, [user])

  // console.log(user);
  
  return (
    <div className='drp'>
      {/* <Outlet/> */}
      
      {ud ? (
       <>
         <div className="userProfile">{user.user.userType}</div>
          <Outlet/>
       </>
      ) : (null)}
    </div>
  );
}

export default DRP;
