import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import PLNewcontent from './PLNewcontent';
import emailImg from '../Images/email.png';

function MyWork() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { urlIdNew } = useParams();

  const parts = urlIdNew.split("-");
  
  const [userType, setUserType] = useState(parts[0]);
  const [uId, setUId] = useState(parts[1]);

  console.log('dfsdfd', userType, uId)

  const [profilePic, setProfilePic] = useState('');
  const [pp, setPp] = useState('http://localhost:4000/uploads/login3profile.png');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [surname, setSurname] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [accessToFeed, setAccessToFeed] = useState(false);
  const [orgId, setOrgId] = useState('');
  const [profUrl, setProfUrl] = useState('')
  const [hasProf, setHasProf] = useState(false)
  const [btnText, setBtnText] = useState('Create')
  const [error, setError] = useState(null)
  const [conf, setConf] = useState('')

  const handleUserType = (event) => setUserType(event.target.value);
  const handleDes = (event) => setDesignation(event.target.value);
  const handleDep = (event) => setDepartment(event.target.value);

  const[atcStyle, setAtcStyle] = useState({
    right: "4px"
})


//attendance
const [atdDays, setAtdDays] = useState([])
const [atdStyle, setAtdStyle] = useState({
  backgroundColor: "#800000",
  color: "white"
})
const [defaultAtdStyle, setDefaultAtdStyle] = useState({
  backgroundColor: "white",
  color: "#800000"
})

const [clockIn, setClockIn] = useState('00:00')
const [clockOut, setClockOut] = useState('00:00')
const [breakTime, setBreakTime] = useState('00:00')
const [totalWorkTime, setTotalWorkTime] = useState('');

const [reportingTo, setReportingTo] = useState('')
const [workRoles, setWorkRoles] = useState('')

    useEffect(() => {
        if (clockIn && clockOut && breakTime) {
            // Convert time strings to Date objects
            const clockInTime = new Date(`01/01/2022 ${clockIn}`);
            const clockOutTime = new Date(`01/01/2022 ${clockOut}`);
            const breakTimeHours = Number(breakTime.split(':')[0]);
            const breakTimeMinutes = Number(breakTime.split(':')[1]);

            // Calculate total work time in milliseconds
            let totalWorkTimeMilliseconds = clockOutTime - clockInTime;
            // Subtract break time
            totalWorkTimeMilliseconds -= breakTimeHours * 60 * 60 * 1000;
            totalWorkTimeMilliseconds -= breakTimeMinutes * 60 * 1000;

            // Convert total work time to hours and minutes
            const totalWorkTimeHours = Math.floor(totalWorkTimeMilliseconds / (1000 * 60 * 60));
            const totalWorkTimeMinutes = Math.floor((totalWorkTimeMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

            // Format total work time
            const formattedTotalWorkTime = `${String(totalWorkTimeHours).padStart(2, '0')}:${String(totalWorkTimeMinutes).padStart(2, '0')}`;
            setTotalWorkTime(formattedTotalWorkTime);
        } else {
            setTotalWorkTime('');
        }
    }, [clockIn, clockOut, breakTime]);



const handleDayClick = (day) => {
  if (!atdDays.includes(day)) {
      setAtdDays([...atdDays, day]);
  }
};

const handleDayDoubleClick = (day) => {
  setAtdDays(atdDays.filter((selectedDay) => selectedDay !== day));
};
useEffect(() => {
  console.log(atdDays)
}, [atdDays])


const handleAtc = ()=>{
  if(atcStyle.right === "4px")
      {
          setAtcStyle({
              right: "28px"
          })
          setAccessToFeed(false)
      }else{
          setAtcStyle({
              right: "4px"
          })
          setAccessToFeed(true)
      }
}
const [doc1, setDoc1] = useState('')
const [doc2, setDoc2] = useState('')
const [doc3, setDoc3] = useState('')
const [doc4, setDoc4] = useState('')
const [docs, setDocs] = useState('')

      useEffect(()=>{

        if(userType)
        {
          if(userType === 'Employee')
          {
            const fetchData = async ()=>{
              try {
                const response = await fetch(`http://localhost:4000/employees/getOneEmployee/${uId}`);
                const json = await response.json();
                if (response.ok) {
                  setFirstName(json.firstName);
                  setMiddleName(json.middleName);
                  setSurname(json.surname);
                  setDesignation(json.designation);
                  setWorkEmail(json.workEmail);
                  setAccessToFeed(json.accessToFeed);
                  setOrgId(json.orgId);
                  setDepartment(json.department);
                  setUserType(json.userType);
                } else {
                  setError(json.error);
                }
              } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Error fetching user data. Please try again later.");
              }
            }
            if(user)  
              {
                fetchData();
              }
          }else if(userType === 'Head')
          {
            const fetchData = async ()=>{
              try {
                const response = await fetch(`http://localhost:4000/headsNew/getOneHeadNew/${uId}`);
                const json = await response.json();
                console.log("jsons", json)
                if (response.ok) {
                  setProfilePic(json.profilePic)
                  setFirstName(json.firstName);
                  setMiddleName(json.middleName);
                  setSurname(json.surname);
                  setDesignation(json.designation);
                  setWorkEmail(json.workEmail);
                  setAccessToFeed(json.accessToFeed);
                  setOrgId(json.orgId);
                  setDepartment(json.department);
                  setUserType(json.userType);
                  // {json.attendanceDays.map((atd) => {
                    setAtdDays(json.attendanceDays);
                // })}
                  // console.log('atdsd', atdDays)
                  setClockIn(json.clockIn)
                  setClockOut(json.clockOut)
                  setBreakTime(json.BreakTime)
                  setReportingTo(json.reportingTo)
                  setWorkRoles(json.wrOfferLetter)
      
                } else {
                  setError(json.error);
                }
              } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Error fetching user data. Please try again later.");
              }
            }

            const fetchDocs = async ()=>{
              try {
                const response = await fetch(`http://localhost:4000/headDocs/getAllHeadDocs`);
                const json = await response.json();
                console.log("jsonsDocs", json)
                if (response.ok) {
                  // console.log(json)
                  setDoc1(json[0].doc1)
                  setDoc2(json[0].doc2)
                  setDoc3(json[0].doc3)
                  setDoc4(json[0].doc4)
                  setDocs(json)
                  console.log("doc11", json[0].doc1)
                } else {
                  setError(json.error);
                }
              } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Error fetching user data. Please try again later.");
              }
            }
            if(user)  
              {
                fetchData();
                fetchDocs();
              }
          }
        }else{
          if(user && user.user.userType === 'Employee')
          {
            const fetchData = async ()=>{
              try {
                const response = await fetch(`http://localhost:4000/employees/getOneEmployee/${user.user._id}`);
                const json = await response.json();
                if (response.ok) {
                  setFirstName(json.firstName);
                  setMiddleName(json.middleName);
                  setSurname(json.surname);
                  setDesignation(json.designation);
                  setWorkEmail(json.workEmail);
                  setAccessToFeed(json.accessToFeed);
                  setOrgId(json.orgId);
                  setDepartment(json.department);
                  setUserType(json.userType);
                } else {
                  setError(json.error);
                }
              } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Error fetching user data. Please try again later.");
              }
            }
            if(user)  
              {
                fetchData();
              }
          }else if(user && user.user.userType === 'Head')
          {
            const fetchData = async ()=>{
              try {
                const response = await fetch(`http://localhost:4000/headsNew/getOneHeadNew/${user.user._id}`);
                const json = await response.json();
                if (response.ok) {
                  setProfilePic(json.profilePic)
                  setFirstName(json.firstName);
                  setMiddleName(json.middleName);
                  setSurname(json.surname);
                  setDesignation(json.designation);
                  setWorkEmail(json.workEmail);
                  setAccessToFeed(json.accessToFeed);
                  setOrgId(json.orgId);
                  setDepartment(json.department);
                  setUserType(json.userType);
                } else {
                  setError(json.error);
                }
              } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Error fetching user data. Please try again later.");
              }
            }
            if(user)  
              {
                fetchData();
              }
          }else
          {
            const fetchData = async ()=>{
              try {
                const response = await fetch(`http://localhost:4000/orgs/getOneOrg/${user.user._id}`);
                const json = await response.json();
                if (response.ok) {
                  setFirstName(json.firstName);
                  setMiddleName(json.middleName);
                  setSurname(json.surname);
                  setDesignation(json.designation);
                  setWorkEmail(json.workEmail);
                  setAccessToFeed(json.accessToFeed);
                  setOrgId(json.orgId);
                  setDepartment(json.department);
                  setUserType(json.userType);
                } else {
                  setError(json.error);
                }
              } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Error fetching user data. Please try again later.");
              }
            }
            if(user)  
              {
                fetchData();
              }
          }
        }
      
        
      }, [user, userType, uId]);

      

      useEffect(() => {
        console.log("doc1", doc1)
      }, [doc1])
      

      const handleSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('attendanceDays', atdDays);
        formData.append('clockIn', clockIn);
        formData.append('clockOut', clockOut);
        formData.append('BreakTime', breakTime);
        formData.append('reportingTo', reportingTo);
        formData.append('workRoles', workRoles);

        console.log("mywork", formData)
    
        if(!userType)
        {
          if(user && user.user.userType === "Head")
          {
            try {
              const response = await fetch(
                `http://localhost:4000/headsNew/updateHeadNew/${user.user._id}`
              ,{
                method: 'PATCH',
                body: formData
              });
              const json = await response.json();
              if (!response.ok) {
                  setError(json.error);
              } else {
                  setError('');
                  setConf("Successfully updated the profile's part 1");
                  console.log("updated", json);
              }
            } catch (error) {
            console.error("Error during form submission:", error);
            setError("Error during form submission. Please try again later.");
          }
          }else if(user && user.user.userType === "Employee"){
            try {
              const response = await fetch(
                `http://localhost:4000/employees/updateEmployee/${user.user._id}`
              ,{
                method: 'PATCH',
                body: formData
              });
              const json = await response.json();
              if (!response.ok) {
                  setError(json.error);
              } else {
                  setError('');
                  setConf("Successfully updated the profile's part 1");
                  console.log("updated", json);
              }
            } catch (error) {
            console.error("Error during form submission:", error);
            setError("Error during form submission. Please try again later.");
          }
          }else{
            try {
              const response = await fetch(
                `http://localhost:4000/orgs/updateOrg/${user.user._id}`
              ,{
                method: 'PATCH',
                body: formData
              });
              const json = await response.json();
              if (!response.ok) {
                  setError(json.error);
              } else {
                  setError('');
                  setConf("Successfully updated the profile's part 1");
                  console.log("updated", json);
              }
            } catch (error) {
            console.error("Error during form submission:", error);
            setError("Error during form submission. Please try again later.");
          }
          }
        }else{
          if(userType === "Head")
          {
          
            try {
              const response = await fetch(
                `http://localhost:4000/headsNew/updateHeadNew/${uId}`, {
                method: 'PATCH',
                body: formData
              });
          
              const json = await response.json();
          
              if (!response.ok) {
                setError(json.error);
              } else {
                setError('');
                setConf("Successfully updated the profile's part 1");
                console.log("Updated", json);
              }
            } catch (error) {
              console.error("Error during form submission:", error);
              setError("Error during form submission. Please try again later.");
            }
          }else if(userType === "Employee"){
            try {
              const response = await fetch(
                `http://localhost:4000/employees/updateEmployee/${uId}`
              ,{
                method: 'PATCH',
                body: formData
              });
              const json = await response.json();
              if (!response.ok) {
                  setError(json.error);
              } else {
                  setError('');
                  setConf("Successfully updated the profile's part 1");
                  console.log("updated", json);
              }
            } catch (error) {
            console.error("Error during form submission:", error);
            setError("Error during form submission. Please try again later.");
          }
          }
        }    
    }

    const goToPrev = () =>{
      setTimeout(() => {
        navigate(`/profile/createProf/profInfo/${urlIdNew}`)
    }, 1000);
    }
  
    // const urlId = userType +"-"+ uId;
  
    const goToNext = () =>{
      setTimeout(() => {
          navigate(`/profile/createProf/rolenres/${urlIdNew}`)
      }, 1000);
      
    }
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
              {/* {user && user.user.profilePic === '' && profUrl === '' && profilePic === '' ? 
                  <img src={pp} alt="" /> 
                  : null
                }
                {profilePic === '' && !hasProf ? <img src={pp} alt="" /> : null}
                {user && profUrl !== '' ? <img src={profUrl} alt="" /> : null}
                {user && profUrl === '' && profilePic !== '' ? 
                  <img src={`http://localhost:4000/uploads/${profilePic}`} alt="" /> 
                  : null
                } */}

                {!profilePic && !profUrl ? <img src={pp} alt="" /> : 
                 profUrl ? <img src={profUrl} alt="" /> : <img src={`http://localhost:4000/uploads/${profilePic}`} alt="" /> }
                <input
                  type="file"
                  // className="form-control-file"
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
                  {urlIdNew ? 
                  <Link to={`/profile/createProf/${urlIdNew}`} className="cpOpt">Personal Info</Link> :

                  <Link to={'/profile/createProf'} className="cpOpt">Personal Info</Link>
                }
                  
              {/* <Link to={'/profile/createProf/'} className="cpOpt">Personal Info</Link> */}
              <Link to={`/profile/createProf/profInfo/${urlIdNew}`} className="cpOpt">Professional Info</Link>
              <Link to={'/profile/createProf/docs'} className="cpOpt">Documents</Link>
              <Link to={'/profile/createProf/mywork'} className="cpOpt">My Work</Link>
              <Link to={'/profile/createProf/designationnres'} className="cpOpt">designations & Responsibilities</Link>
            </div>
            <div className="persInfoMain docMain myWorkMain">
        <div className='adatMain'>
            <div className="adat">
                <div className="rtad">
                    <h4>Select Work Attendance Days:</h4>
                    <div className="days">
                      
                    <p className="d" onClick={()=>{atdDays.includes('Monday') ? handleDayDoubleClick('Monday') : handleDayClick('Monday')}} style={atdDays.includes('Monday') ? atdStyle : defaultAtdStyle}>Monday</p>
                    <p className="d" onClick={()=>{atdDays.includes('Tuesday') ? handleDayDoubleClick('Tuesday') : handleDayClick('Tuesday')}} style={atdDays.includes('Tuesday') ? atdStyle : defaultAtdStyle}>Tuesday</p>
                    <p className="d" onClick={()=>{atdDays.includes('Wednesday') ? handleDayDoubleClick('Wednesday') : handleDayClick('Wednesday')}} style={atdDays.includes('Wednesday') ? atdStyle : defaultAtdStyle}>Wednesday</p>
                    <p className="d" onClick={()=>{atdDays.includes('Thursday') ? handleDayDoubleClick('Thursday') : handleDayClick('Thursday')}} style={atdDays.includes('Thursday') ? atdStyle : defaultAtdStyle}>Thursday</p>
                    <p className="d" onClick={()=>{atdDays.includes('Friday') ? handleDayDoubleClick('Friday') : handleDayClick('Friday')}} style={atdDays.includes('Friday') ? atdStyle : defaultAtdStyle}>Friday</p>
                    <p className="d" onClick={()=>{atdDays.includes('Saturday') ? handleDayDoubleClick('Saturday') : handleDayClick('Saturday')}} style={atdDays.includes('Saturday') ? atdStyle : defaultAtdStyle}>Saturday</p>
                    <p className="d" onClick={()=>{atdDays.includes('Sunday') ? handleDayDoubleClick('Sunday') : handleDayClick('Sunday')}} style={atdDays.includes('Sunday') ? atdStyle : defaultAtdStyle}>Sunday</p>
                    </div>
                </div>
                <div className="rtad">
                    <h4>Select Work Attendance Timing:</h4>
                    <div className="cico">
                        <h4>Ideal Clock in - </h4>
                        <div className="cct">
                        <input type="time" value={clockIn} onChange={(e)=>setClockIn(e.target.value)}/>
                        {/* <select>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select> */}

                        </div>
                    </div>
                    <div className="cico">
                        <h4>Ideal Clock out - </h4>
                        <div className="cct">

                        <input type="time" value={clockOut} onChange={(e)=>setClockOut(e.target.value)}/>
                        {/* <select>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select> */}
                        </div>
                    </div>
                    <div className="cico">
                        <h4>Break time - </h4>
                        <div className="cct">

                        <input type="time" value={breakTime} onChange={(e)=>setBreakTime(e.target.value)}/>
                        </div>
                    </div>
                    <div className="cico tt">
                        <h4>Total work time - </h4>
                        <div className="cct">

                        <p>{totalWorkTime}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="adat">
                <div className="rtad">
                    <h4>Reporting To: </h4>
                        <select value={reportingTo} onChange={(e)=>setReportingTo(e.target.value)}>
                            <option value="">Select Head Employees</option>
                            <option value="Employee1">Employee1</option>
                            <option value="Employee2">Employee2</option>
                            <option value="Employee3">Employee3</option>
                            <option value="Employee4">Employee4</option>
                        </select>
                </div>
                <div className="rtad">
                    <h4>Work Roles/ Offer letter</h4>
                    <div className="adIn ad">
                      <p>{workRoles && workRoles.name? workRoles.name : ""}</p>
                        <input type="file" id='pan1' name='uploaded_file' onChange={(e)=>setWorkRoles(e.target.files[0])}/>
                        <label htmlFor="pan1">Upload File</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="prevNext">

                  <button className='previous' onClick={goToPrev}>Previous</button>
                
                  <button className='next' onClick={goToNext}>
                  {/* <Link to={'/profile/cbprofinfo'}> */}
                    Next
                    {/* </Link> */}
                  </button>
        </div>
    </div>
            {!error && error!= '' ?(<div className="success">{conf}</div>) : (<div className="error">{error}</div>) }
          </div>
        </div>
      </form>
    </div>
    
  )
}

export default MyWork