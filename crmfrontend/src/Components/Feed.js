import React, { useEffect, useState } from 'react'
import '../css/feed.css'
import rgtArrow from '../Images/rgtarrow.png'
import defaultProfile from '../Images/login3profile.png'
import ProfileLeft from './ProfileLeft'
import uparrows from "../Images/uparrows.png";
import executive from '../Images/executive.png'
import head from '../Images/head.png'
import employee from '../Images/employee.png'
import { useAuthContext } from '../hooks/useAuthContext'
import deleteIcon from '../Images/deleteIcon.png'

function Feed() {
  
  const {user} = useAuthContext()
  console.log("user", user)

  const formatPostDesc = (description) => {
    return description.replace(/#(\w+)/g, '<span style="color: #800000; font-family: sans-serif; font-weight: 600">#$1</span>');
  };

  const [feed, setFeed] = useState('')
  const [post, setPost] = useState('')
  const [pp, setPp] = useState('')
  const [firstName, setFirstName] = useState('')
  const [role, setRole] = useState('')

    const fetchData = async ()=>{
      const response = await fetch('http://localhost:4000/feeds/getAllFeed')

      const json = await response.json()
      if(response.ok)
      {
        setFeed(json)
      }
    }
    useEffect(() => {
    if(user)
    {
      fetchData()
      console.log("feed", user.user.profilePic)
    }

    if(user && user.user.profilePic != '')
    {
      setPp(user.user.profilePic)
      console.log('pp', pp)
    }else{
      setPp('login3profile.png')
      console.log('pp', pp)
    }

    if(user && user.user.firstName != '')
    {
      const fname = user.user.firstName +" "+ user.user.surname
      setFirstName(fname)
      console.log('firstName', firstName)
    }else{
      setFirstName('-')
      console.log('firstName', firstName)
    }

    if(user && user.user.role != '')
    {
      setRole(user.user.role)
      console.log('role', role)
    }else{
      setRole('-')
      console.log('role', role)
    }
    
  
  }, [user])

  
  const handleSubmit = async(e) =>{
    e.preventDefault()

    console.log("pp:", pp);
    console.log("user:", user);
    console.log("post:", post);
    const formData = new FormData()
    formData.append("profilePic", pp)
    formData.append("name", firstName)
    formData.append("role", role)
    formData.append("post", post)

    const data = {
      profilePic: pp,
      name: firstName,
      role: role,
      post: post
    };
    
    setTimeout(() => {
      console.log("formdata", formData)
    }, 1000);
      
      try {
        const response = await fetch(
          'http://localhost:4000/feeds/createFeed',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        const json = await response.json();
        fetchData()
        setPost('')
        console.log("json", json)
        
      } catch (error) {
      console.error("Error during form submission:", error);
      // setError("Error during form submission. Please try again later.");
    }

}

const formatTime = (createdAt) => {
  const date = new Date(createdAt);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const handleDeleteFeed = async(e) =>{
  // e.preventDefault()
  try{
    const response = await fetch(`http://localhost:4000/feeds/deleteFeed/${e}`,{
      method: "DELETE"
    })
    const json = await response.json()
    if(response.ok)
    {
      fetchData()
      console.log(json)
    }
  }catch(error){
    console.error(error)
  }
}

  return (
    <>
    {/* <div className="profileLeft">
          <ProfileLeft/>
      </div> */}
        <h2>Feed</h2>
      <div className='feedMain'>
        <div className="postFeed">
            {/* <img src={rgtArrow} alt="rgtArrow" /> */}
            <img src={user && user.user.userType === "Org" ? executive : user && user.user.userType === "Head" ? head : employee} alt="uparrows" />
            <form method="post" onSubmit={handleSubmit}>
            <input type="text" value={post} onChange={(e) => setPost(e.target.value)} placeholder="Write what's Brifin'"/>
                <button className='postBtn'>Post</button>
            </form>
        </div>
        <div className="allPosts">
          {feed && feed.map((post, index)=>(
            <div className="post" key={index}>
              {/* {console.log(post._id)} */}
            <img src={`http://localhost:4000/uploads/${post.profilePic}`} alt="defaultProfile" className='postProf'/>
            <div className="postInfo">
              <div className="postHead">
                {/* <img src={rgtArrow} alt="rgtArrow" /> */}
                <img src={user && user.user.userType === "Org" ? executive : user && user.user.userType === "Head" ? head : employee} alt="uparrows" />
                <p className='pName'>{post.name}</p>
                <p className='pRole'>-{post.role}</p>
              </div>
              {/* <p className="postDesc">
              #buzz Hi! We are updating some of our activities that are beneficial for the company in terms of growth for every employee. We are arranging a new growth workshop every Friday, which will be interesting for all employees. Since tomorrow is Friday, please be present at 4 pm in the office auditorium as we have a surprise for everyone.
              </p> */}
              <p className="postDesc" dangerouslySetInnerHTML={{ __html: formatPostDesc(post.post) }} />
            </div>
            <p className='postTime'>{formatTime(post.createdAt)}</p>
            {user && user.user.userType === "Org" && <img src={deleteIcon} alt="deleteIcon" className="deletePost" onClick={(e)=>handleDeleteFeed(post._id)}/>}
              
          </div>

          ))}
          
        </div>
    </div>
    </>
    
  )
}

export default Feed