import React, { useEffect, useState } from 'react'
import '../css/login.css'
import login2img from '../Images/login2img.png'
import login3profile from '../Images/login3profile.png'
import crmlogo from '../Images/crmlogo.png'
import learnmore from '../Images/learnmore.png'
import useLogin from '../hooks/useLoginOrg'
import view from '../Images/view.png';
import hide from '../Images/hide.png';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'

function Login() {
    const {user} = useAuthContext()
    const {login, isLoading, error} = useLogin()
    const [orgId, setOrgId] = useState('')
    const [empId, setEmpId] = useState('')
    const [pass, setPass] = useState('')
    const [conf, setConf] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState('')

    const handleClick = () => {
        setPasswordVisible(!passwordVisible);
    };

        const handleSubmit = async(e) =>{
            e.preventDefault()

            await login(orgId, empId, pass)

            if(!error){
                setConf("Successfully logged in!!")
                setTimeout(() => {
                    navigate('/mwis');
                  }, 1500);
            }
        }

        useEffect(()=>{
            if(user)
            {
                setProfilePic(user.user.profilePic)
            }
        },[user])
        console.log(user)
        
  return (
    <>
    <div className="loginMain">
        <div className="login">
            <div className="login1">
                <div className="subLogin1 sbl1">
                <img className='crmlogo' src={crmlogo} alt="logo" />
                <h1>Streamlined <br/> Softwares with<br/> <span>Ease</span> </h1>
                <p>Learn more<img className='learnmore' src={learnmore} alt="Learn more" /></p>
                </div>
            </div>
            <div className="login2">
                <img src={login2img} alt="Girl" />
            </div>
            <form className="login3" onSubmit={handleSubmit}>
                <div className="subLogin3">
                <h1>Login</h1>
                {/* <img className='userprofileimg' src={login3profile} alt="profile" /> */}
                <img src={user && user.token && profilePic != '' ? `http://localhost:4000/uploads/${profilePic}` : login3profile} alt="profileImg" className='profileImg'/>
                
                <input type="text" placeholder='Organisation ID' onChange={(e)=>setOrgId(e.target.value)} value={orgId}/>
                <input type="text" placeholder='Employee ID' onChange={(e)=>setEmpId(e.target.value)} value={empId}/>
                <div className="passBox">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Create Password"
                        value={pass} onChange={(e) => setPass(e.target.value)}
                    />
                    <div className="pvh">
                        <img
                            src={passwordVisible ? view : hide}
                            alt={passwordVisible ? 'hide' : 'view'}
                            onClick={handleClick}
                        />
                    </div>
                </div>
                <button>Dive In</button>
                {!error && error!= '' ?(<div className="success">{conf}</div>) : (<div className="error">{error}</div>) }
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login