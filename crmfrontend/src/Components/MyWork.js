import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

function MyWork() {
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
    <div className="persInfoMain docMain myWorkMain">
        <div className='adatMain'>
            <div className="adat">
                <div className="rtad">
                    <h4>Select Work Attendance Days:</h4>
                    <div className="days">
                        <p className="d">Monday</p>
                        <p className="d">Tuesday</p>
                        <p className="d">Wednesday</p>
                        <p className="d">Thursday</p>
                        <p className="d">Friday</p>
                        <p className="d">Saturday</p>
                        <p className="d">Sunday</p>
                    </div>
                </div>
                <div className="rtad">
                    <h4>Select Work Attendance Timing:</h4>
                    <div className="cico">
                        <h4>Ideal Clock in - </h4>
                        <div className="cct">
                        <input type="time" value='00:00'/>
                        <select>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>

                        </div>
                    </div>
                    <div className="cico">
                        <h4>Ideal Clock out - </h4>
                        <div className="cct">

                        <input type="time" value='00:00' />
                        <select>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                        </div>
                    </div>
                    <div className="cico">
                        <h4>Break time - </h4>
                        <div className="cct">

                        <input type="time" value='00:00'/>
                        </div>
                    </div>
                    <div className="cico tt">
                        <h4>Total work time - </h4>
                        <div className="cct">

                        <p>00:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="adat">
                <div className="rtad">
                    <h4>Reporting To: </h4>
                        <select>
                            <option value="">Select Head Employees</option>
                            <option value="">Employee1</option>
                            <option value="">Employee2</option>
                            <option value="">Employee3</option>
                            <option value="">Employee4</option>
                        </select>
                </div>
                <div className="rtad">
                    <h4>Work Roles/ Offer letter</h4>
                    <div className="adIn">
                        <input type="file" id='pan1'/>
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
  )
}

export default MyWork