import React, { useEffect, useState } from 'react'
import rightArrow from '../Images/rgtarrow.png'
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import PLNewcontent from './PLNewcontent';
import emailImg from '../Images/email.png';

function Documents() {
    const navigate = useNavigate()
    const {user} = useAuthContext()
    const location = window.location.pathname;
    const {urlIdNew} = useParams()
  console.log("profInfoUrl",urlIdNew)

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

      const [doc1, setDoc1] = useState('')
      const [doc2, setDoc2] = useState('')
      const [doc3, setDoc3] = useState('')
      const [doc4, setDoc4] = useState('')

      const handleSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('document1', doc1);
        formData.append('document2', doc2);
        formData.append('document3', doc3);
        formData.append('document4', doc4);
    
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
                `http://localhost:4000/headsNew/updateHeadNew/${uId}`
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
          navigate(`/profile/createProf/mywork/${urlIdNew}`)
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
            <div className="persInfoMain docMain">
        <h4>Upload National ID / Aadhaar Card / PAN</h4>
        <input type="file" id='pan'/>
        <label htmlFor="pan" className='pan'>Upload File</label>
        <div className="allDocs">
            <div className="ad">
                {doc1 ? <p>{doc1}</p> : <p>Certificate / File Name 1</p>}
                
                <input type="file" id='pan1' value={doc1} onChange={(e)=>setDoc1(e.target.value)}/>
                <label htmlFor="pan1">Upload File</label>
            </div>
            <div className="ad">
            {doc2 ? <p>{doc2}</p> : <p>Certificate / File Name 2</p>}
                <input type="file" id='pan2' value={doc2} onChange={(e)=>setDoc2(e.target.value)}/>
                <label htmlFor="pan2">Upload File</label>
            </div>
            <div className="ad">
            {doc3 ? <p>{doc3}</p> : <p>Certificate / File Name 3</p>}
                <input type="file" id='pan3' value={doc3} onChange={(e)=>setDoc3(e.target.value)}/>
                <label htmlFor="pan3">Upload File</label>
            </div>
            <div className="ad">
            {doc4 ? <p>{doc4}</p> : <p>Certificate / File Name 4</p>} 
                <input type="file" id='pan4' value={doc4} onChange={(e)=>setDoc4(e.target.value)}/>
                <label htmlFor="pan4">Upload File</label>
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

export default Documents