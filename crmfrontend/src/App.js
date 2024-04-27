
import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import OrgSignup from './Components/OrgSignup'
import Loader from './Components/Loader';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CBPersonalInfo from './Components/CBPersonalInfo';
import CBProfessionalInfo from './Components/CBProfessionalInfo';
import DRP from './Components/DRP';
import { useAuthContext } from './hooks/useAuthContext';
import CBrif from './Components/CBrif';
import '../src/css/mq.css'
import { useState } from 'react';
import CbpNew from './Components/CbpNew';
import MySpace from './Components/MySpace';
import Workforce from './Components/Workforce';
import Inventory from './Components/Inventory';
import Settings from './Components/Settings';

function App() {
  const {user} = useAuthContext()
  console.log("app",user)

  return (
    // <>
    // <Loader/>
    // <Login/>
    // <Profile/>
    // <OrgSignup/>
    // </>
    <Router>
      <Loader/>
      {!user ? <div className="pageCover"></div> : null}
      <Routes>
        <Route path='/' element={<Login/>}/>
        
        <Route path='/orgsignup' element={<OrgSignup/>}/>
        <Route path='/profile' element={<Profile/>}>
            <Route path='/profile' element={<DRP/>}>
              {user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org") ? (
                <>
                  <Route path='/profile/' element={<CBrif/>}/>
                  <Route path='/profile/cbpPer' element={<CBPersonalInfo/>}/>
                  <Route path='cbprofinfo' element={<CBProfessionalInfo/>}/>
                  <Route path='mySpace' element={<MySpace/>}/>
                <Route path='workforce' element={<Workforce/>}/>
                <Route path='inventory' element={<Inventory/>}/>
                <Route path='settings' element={<Settings/>}/>
                </>
              ):(
                null
              )}
              <Route path='/profile/' element={<CBPersonalInfo/>}/>
              <Route path='cbprofinfo' element={<CBProfessionalInfo/>}/>
              <Route path='mySpace' element={<MySpace/>}/>
              <Route path='workforce' element={<Workforce/>}/>
              <Route path='inventory' element={<Inventory/>}/>
              <Route path='settings' element={<Settings/>}/>
            </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
