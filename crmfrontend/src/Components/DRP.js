import React, { useEffect, useState } from 'react';
import rightArrow from '../Images/rgtarrow.png';
import { Link, Outlet } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSignupHead } from '../hooks/useSignupHead';
import CBrif from './CBrif';
import CBPersonalInfo from './CBPersonalInfo';

function DRP() {
  const { user } = useAuthContext();
  const [ud, setUd] = useState(false);

  

  useEffect(()=>{
    if(user && user.user)
  {
    setUd(true)
  }
  }, [user])

  console.log(user);
  
  return (
    <div className='drp'>
      {/* <Outlet/> */}
      
      {ud ? (
       <>
         <div className="userProfile">{user.user.userType}</div>
        {user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org") ? (
          <CBrif />
        ) : (
          // <CBPersonalInfo />
          <Outlet/>
        )
        }
       </>
      ) : (null)}
    </div>
  );
}

export default DRP;
