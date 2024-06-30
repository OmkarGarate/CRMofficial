import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import OrgSignup from "./Components/OrgSignup";
import Loader from "./Components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CBPersonalInfo from "./Components/CBPersonalInfo";
import CBProfessionalInfo from "./Components/CBProfessionalInfo";
import DRP from "./Components/DRP";
import { useAuthContext } from "./hooks/useAuthContext";
import CBrif from "./Components/CBrif";
import "../src/css/mq.css";
import { useEffect, useState } from "react";
import CbpNew from "./Components/CbpNew";
import Feed from "./Components/Feed";
import MySpace from "./Components/MySpace";
import Workforce from "./Components/Workforce";
import Inventory from "./Components/Inventory";
import Settings from "./Components/Settings";
import Mwis from "./Components/Mwis";
import WorkforceNew from "./Components/WorkforceNew";
import AllPositions from "./Components/AllPositions";
import HeadPositions from "./Components/HeadPositions";
import EmployeePositions from "./Components/EmployeePositions";
import AllProfiles from "./Components/AllProfiles";
import HeadEmployees from "./Components/HeadEmployees";
import Employees from "./Components/Employees";
import ProfilesNew from "./Components/ProfilesNew";
import CBrifNew from "./Components/CBrifNew";
import CreateProfile from "./Components/CreateProfile";
import ProfInfo from "./Components/ProfInfo";
import PersInfo from "./Components/PersInfo";
import Documents from "./Components/Documents";
import MyWork from "./Components/MyWork";
import RolesnRes from "./Components/RolesnRes";
import CreateProfileNew from "./Components/CreateProfilleNew";
import Designation from "./Components/Designation";

function App() {
  const { user } = useAuthContext();

  console.log("app", user);

  return (
    // <>
    // <Loader/>
    // <Login/>
    // <Profile/>
    // <OrgSignup/>
    // </>
    <Router>
      <Loader />
      {!user ? <div className="pageCover"></div> : null}
      {/* <ClockMain/> */}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/orgsignup" element={<OrgSignup />} />
        <Route path="/mySpace" element={<Feed />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile" element={<DRP />}>
            {user &&
            (user.user.role === "Human Resource Head2" ||
              user.user.userType === "Org") ? (
              <>
                <Route path="/profile/" element={<CBrif />} />
                <Route path="/profile/cbn" element={<CBrifNew />} />
                {/* <Route path='/profile/createProf' element={<CreateProfile/>}> */}
                {/* <Route path='/profile/createProf' element={<CreateProfileNew/>}> */}
                <Route path="/profile/createProf" element={<PersInfo />} />
                <Route
                  path="/profile/createProf/:urlIdNew"
                  element={<PersInfo />}
                />
                <Route
                  path="/profile/createProf/profInfo/:urlIdNew"
                  element={<ProfInfo />}
                />
                <Route
                  path="/profile/createProf/docs/:urlIdNew"
                  element={<Documents />}
                />
                <Route
                  path="/profile/createProf/mywork/:urlIdNew"
                  element={<MyWork />}
                />
                <Route
                  path="/profile/createProf/rolenres/:urlIdNew"
                  element={<RolesnRes />}
                />
                {/* </Route> */}
                <Route
                  path="/profile/cbpPer/:urlId"
                  element={<CBPersonalInfo />}
                />
                <Route
                  path="/profile/editProfile"
                  element={<CBPersonalInfo />}
                />

                <Route path="editProfInfo" element={<CBProfessionalInfo />} />
                <Route
                  path="cbpProfInfo/:urlId"
                  element={<CBProfessionalInfo />}
                />
                {/* <Route path='mySpace' element={<MySpace/>}/>
                <Route path='workforce' element={<Workforce/>}/>
                <Route path='inventory' element={<Inventory/>}/>
                <Route path='settings' element={<Settings/>}/> */}
              </>
            ) : null}
            <Route path="/profile/" element={<CBPersonalInfo />} />
            <Route path="cbprofinfo" element={<CBProfessionalInfo />} />
          </Route>
        </Route>
        <Route path="/mwis" element={<Mwis />}>
          <Route path="/mwis" element={<MySpace />} />
          {/* <Route path="/mwis/workforce" element={<WorkforceNew />} /> */}
          {/* <Route path='/mwis/workforce/' element={<AllPositions/>}/> */}
          {/* </Route> */}
          <Route path="/mwis/inventory" element={<Inventory />} />
          <Route path="/mwis/des" element={<Workforce />} />
          <Route path="/mwis/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
