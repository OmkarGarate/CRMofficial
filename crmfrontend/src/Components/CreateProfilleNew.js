import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import PLNewcontent from './PLNewcontent';
import '../css/createProfile.css';
import emailImg from '../Images/email.png';
import useSignupHead from '../hooks/useSignupHead';
import { useNavigate } from 'react-router-dom';

function CreateProfileNew() {
  const { user } = useAuthContext();
  const { signupHead } = useSignupHead();
  const [profilePic, setProfilePic] = useState('');
  const [pp, setPp] = useState('http://localhost:4000/uploads/login3profile.png');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [surname, setSurname] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [accessToFeed, setAccessToFeed] = useState("false");
  const [orgId, setOrgId] = useState('');
  const [profUrl, setProfUrl] = useState('')
  const [hasProf, setHasProf] = useState(false)

  const handleUserType = (event) => setUserType(event.target.value);
  const handleDes = (event) => setDesignation(event.target.value);
  const handleDep = (event) => setDepartment(event.target.value);

  const[atcStyle, setAtcStyle] = useState({
    right: "4px"
  })

  const handleAtc = () => {
    if (atcStyle.right === "4px") {
      setAtcStyle({
        right: "28px"
      })
      setAccessToFeed("false")
    } else {
      setAtcStyle({
        right: "4px"
      })
      setAccessToFeed("true")
    }
  }

  useEffect(() => {
    if (user && user.user) {
      setOrgId(user.user.orgId);
    }
  }, [user]);

  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');

  const generateEmployeeId = (firstName) => {
    const maxLength = 7;
    let employeeId = firstName.replace(/\s+/g, '').toUpperCase().slice(0, 3);
    const numNumbers = maxLength - employeeId.length;
    for (let i = 0; i < numNumbers; i++) {
      employeeId += Math.floor(Math.random() * 100);
    }
    return employeeId;
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generatePassword = (firstName) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
    const specialChars = '!@#$%^&*()_+';
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let password = firstName.replace(/\s+/g, '');
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    for (let i = 0; i < 2; i++) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
    for (let i = 0; i < 2; i++) {
      password += caps[Math.floor(Math.random() * caps.length)];
    }
    while (password.length < 10) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    return shuffle(password.split('')).join('');
  };

  useEffect(() => {
    setEmpId(generateEmployeeId(firstName));
    setPassword(generatePassword(firstName));
  }, [firstName]);

  const [error, setError] = useState(null)
  const [conf, setConf] = useState('')
  const [createdUser, setCreatedUser] = useState('')
  const [urlId, setUrlId] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:4000/headsNew/signupHeadNew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, middleName, surname, designation, workEmail, accessToFeed, orgId, department, empId, password, userType })
      });

      if (!response.ok) {
        setError('Failed to sign up');
      }

      const json = await response.json();
      setCreatedUser(json)
      console.log(json);
    } catch (error) {
      console.error('Error during sign up:', error.message);
      setError(error.message);
    }

    if (!error) {
      setConf("Successfully Registered!!")
    } else {
      setError(error)
    }
  }
  

  useEffect(() => {
    if (createdUser && createdUser.user) {
      setUrlId(createdUser.user.userType + "-" + createdUser.user._id);
    }
  }, [createdUser, createdUser.user, urlId])
  return (
    <div className='pbr createProfMain'>
      <div className="profileLeft">
        <PLNewcontent />
      </div>
      <form className="mwis" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        <div className="cprfMain">
          <h2>Create Profile</h2>
          <div className="cpTop">
            <div className="cpProfile">
              <div className="upImg">
                {user && user.user.profilePic === '' && profUrl === '' && profilePic === '' ? 
                  <img src={pp} alt="" /> 
                  : null
                }
                {profilePic === '' && !hasProf ? <img src={pp} alt="" /> : null}
                {user && profUrl !== '' ? <img src={profUrl} alt="" /> : null}
                {user && profUrl === '' && profilePic !== '' ? 
                  <img src={`http://localhost:4000/uploads/${profilePic}`} alt="" /> 
                  : null
                }
                <input
                  type="file"
                  className="form-control-file"
                  name="uploaded_file"
                  onChange={(e) => {
                    setProfilePic(e.target.files[0]);
                    setProfUrl(URL.createObjectURL(e.target.files[0]));
                  }}
                  id='upImg'
                />
                <label htmlFor="upImg">Upload Image</label>
              </div>
              <div className="cpm">
                <input type="text" placeholder='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input type="text" placeholder='Middle Name'
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
                <input type="text" placeholder='Surname'
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                <select name="" id="" className='marStat'
                  value={userType} onChange={handleUserType}
                >
                  <option value="">UserType</option>
                  <option value="Employee">Employee</option>
                  <option value="Head">Head</option>
                </select>
              </div>
              <div className="whitePatch"></div>
            </div>
            <div className="cawweMain">
              <div className="cawMain">
                <div className="caw1">
                  <select name="" id=""
                    value={department} onChange={handleDep}
                  >
                    <option value="">Choose Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  <select name="" id=""
                    value={designation} onChange={handleDes}
                  >
                    <option value="">Assign Designation</option>
                    <option value="Human Resource Head1">Human Resource Head1</option>
                    <option value="Human Resource Head2">Human Resource Head2</option>
                    <option value="Human Resource Head3">Human Resource Head3</option>
                  </select>
                </div>
                <div className="accToFeed">
                  <p>Give Access to <br /> Posting on Feed</p>
                  <input type="checkbox" id='atf' />
                  <label htmlFor="atf" onClick={handleAtc}>
                    <div className="atfSwitch" style={atcStyle}></div>
                  </label>
                </div>
              </div>
              <div className="wwe">
                <img src={emailImg} alt="emailImg" />
                <input type="text" placeholder='Write Work Email'
                  value={workEmail} onChange={(e) => setWorkEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="cpOut">
            <div className="cpoTop">
                  {urlId ? 
                  <Link to={`/profile/createProf/${urlId}`} className="cpOpt">Personal Info</Link> :

                  <Link to={'/profile/createProf'} className="cpOpt">Personal Info</Link>
                }
                  
              {/* <Link to={'/profile/createProf/'} className="cpOpt">Personal Info</Link> */}
              <Link to={`/profile/createProf/profInfo/${urlId}`} className="cpOpt">Professional Info</Link>
              <Link to={'/profile/createProf/docs'} className="cpOpt">Documents</Link>
              <Link to={'/profile/createProf/mywork'} className="cpOpt">My Work</Link>
              <Link to={'/profile/createProf/designationnres'} className="cpOpt">designations & Responsibilities</Link>
            </div>
            <Outlet/>
            {!error && error!= '' ?(<div className="success">{conf}</div>) : (<div className="error">{error}</div>) }
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProfileNew;
