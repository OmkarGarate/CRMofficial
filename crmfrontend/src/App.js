
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

function App() {
  const {user} = useAuthContext()

  return (
    // <>
    // <Loader/>
    // <Login/>
    // <Profile/>
    // <OrgSignup/>
    // </>
    <Router>
      <Loader/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/orgsignup' element={<OrgSignup/>}/>
        <Route path='/profile' element={<Profile/>}>
            <Route path='/profile' element={<DRP/>}>
              {/* <Route path='/profile/cbp' element={<CBrif/>}/> */}
              <Route path='/profile/' element={<CBPersonalInfo/>}/>
              <Route path='cbprofinfo' element={<CBProfessionalInfo/>}/>
            </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
