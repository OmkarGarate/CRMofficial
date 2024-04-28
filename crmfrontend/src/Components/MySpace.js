import React, { useEffect, useState } from 'react'
import Feed from './Feed'
import '../css/myspace.css'
import sir from '../Images/sir.png'
import PLNewcontent from './PLNewcontent'
import login3profile from '../Images/login3profile.png'

function MySpace() {

  const [users, setUsers] = useState('')

  useEffect(()=>{

      const fetchData = async ()=>{
        try {
          const response = await fetch(`http://localhost:4000/orgs/getAllOrgs`);
          const json = await response.json();
    
          if (response.ok) {
            const sortedUsers = json.sort((a, b) =>  a.name - b.name).reverse();
setUsers(sortedUsers);

            
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
  
          fetchData();
     
      const fetchData2 = async ()=>{
        try {
          const response = await fetch(`http://localhost:4000/heads/getAllHeads`);
          const json = await response.json();
    
          if (response.ok) {
            const sortedUsers = json.sort((a, b) =>  a.name - b.name).reverse();
setUsers(sortedUsers);
            
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
  
          fetchData2();
      
      const fetchData3 = async ()=>{
        try {
          const response = await fetch(`http://localhost:4000/employees/getAllEmployees`);
          const json = await response.json();
          if (response.ok) {
            const sortedUsers = json.sort((a, b) => a.name - b.name).reverse();
setUsers(sortedUsers);
            
          } 
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }

          fetchData3();
        
        setUsers(users.slice(0, 3))

    
  }, []);
  console.log("users", users)
  return (
    <div className="mwis">
      <div className='mySpaceMain'>
      <div className="msp">
        {users &&
        <div className="status">
        <h2>Status</h2>
        <div className="statusMain">
          <div className="activenow">
            <div className="circles">
            {users.slice(0, 3).map((user, index) => (
              <img src={ user.profilePic ? `http://localhost:4000/uploads/${user.profilePic}` : login3profile} alt="" key={index}/>
            ))}
            <div className="count">+{users.length}</div>
            </div>
            <div className="label">
              <div className="green"></div>
              <p>Active Now</p>
            </div>
          </div>

          <div className="activenow">
            <div className="circles">
            {users.slice(0, 3).map((user, index) => (
              <img src={ user.profilePic ? `http://localhost:4000/uploads/${user.profilePic}` : login3profile} alt="" key={index}/>
            ))}
            <div className="count">+{users.length}</div>
            </div>
            <div className="label">
              <div className="yellow"></div>
              <p>On Break</p>
            </div>
          </div>

          <div className="activenow">
            <div className="circles">
            {users.slice(0, 3).map((user, index) => (
              <img src={ user.profilePic ? `http://localhost:4000/uploads/${user.profilePic}` : login3profile} alt="" key={index}/>
            ))}
            <div className="count">+{users.length}</div>
            </div>
            <div className="label">
              <div className="orange"></div>
              <p>Absent</p>
            </div>
          </div>
        </div>

        {/* status component */}
       </div>
        }
        
        <Feed/>
      </div>
      <div className="dashboard">
        <h2>Dashboard</h2>
        <div className="dashboardInner">
          
        </div>
      </div>
    </div>
    </div>
    
    
    
  )
}

export default MySpace