import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

function Documents() {
    const navigate = useNavigate()
    const {user} = useAuthContext()
    const location = window.location.pathname;
    const {urlId} = useParams()
  console.log(urlId)
  let parts = ''
  if(location === `/profile/createProf/${urlId}`)
  {
     parts = urlId.split("-");
  }
  
  const [userType, setUserType] = useState(parts[0]);
  const [uId, setUId] = useState(parts[1]);
    const goToPrev = () =>{
        setTimeout(() => {
          if(user && (user.user.role === "Human Resource Head2" || user.user.userType === "Org"))
          {
            navigate('/profile/')
          }
        }, 1000);
      }
    
      // const urlId = userType +"-"+ uId;
    
      const goToNext = () =>{
        setTimeout(() => {
          if(location === `/profile/createProf/` || location === `/profile/createProf/${urlId}`)
        {
          setTimeout(() => {
            navigate(`/profile/createProf/profInfo`)
          }, 1000);
        }else{
          navigate('/profile/editProfInfo')
        }
        }, 1000);
        
      }
  return (
    <div className="persInfoMain docMain">
        <h4>Upload National ID / Aadhaar Card / PAN</h4>
        <input type="file" id='pan'/>
        <label htmlFor="pan" className='pan'>Upload File</label>
        <div className="allDocs">
            <div className="ad">
                <p>Certificate / File Name 1</p>
                <input type="file" id='pan1'/>
                <label htmlFor="pan1">Upload File</label>
            </div>
            <div className="ad">
            <p>Certificate / File Name 1</p>
                <input type="file" id='pan2'/>
                <label htmlFor="pan2">Upload File</label>
            </div>
            <div className="ad">
            <p>Certificate / File Name 1</p>
                <input type="file" id='pan3'/>
                <label htmlFor="pan3">Upload File</label>
            </div>
            <div className="ad">
            <p>Certificate / File Name 1</p>
                <input type="file" id='pan4'/>
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
  )
}

export default Documents