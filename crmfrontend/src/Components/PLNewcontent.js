import React, { useEffect, useState } from "react";
import crmlogo from "../Images/crmlogo.png";
import sir from "../Images/sir.png";
import homer from "../Images/homer.png";
import homeg from "../Images/homeg.png";
import workforcer from "../Images/workforcer.png";
import workforceg from "../Images/workforceg.png";
import inventoryr from "../Images/inventoryr.png";
import inventoryg from "../Images/inventoryg.png";
import settingr from "../Images/settingr.png";
import settingg from "../Images/settingg.png";
import uparrows from "../Images/uparrows.png";
import "../css/plnew.css";
import { Link } from "react-router-dom";

function PLNewcontent() {
  const location = window.location.pathname
  const [compColor, setCompColor] = useState({
    color: 'gray'
  })

  const handleClick = (e) =>{
    
    if(location === '/profile/mySpace' && e === 'myspace')
    {
      setCompColor({
        color: "red"
      })

    }else{
      setCompColor({
        color: "gray"
      })
    }
  }

  return (
    <>
      <div className="newCMain">
        <img src={crmlogo} alt="" />
        <div className="ncMain">
        <div className="nc1">
          <img src={sir} alt="" />
          <div className="executive">
            <img src={uparrows} alt="" />
            <p>EXECUTIVE</p>
          </div>
          <div className="sirName">
            <p>Brigitte Jacobs</p>
            <span>Registered on: 18 March 2024</span>
          </div>
        </div>
        <div className="nc2">
          <Link to={'/profile/mySpace'} className="mySpace" onClick={(e)=>handleClick("myspace")}>
            <div className="vrSlide"></div>
            <div className="ncImg">
            <img src={homeg} alt="" />
            <img src={homer} alt="" />
            </div>
            <p style={compColor}>My space</p>
          </Link>
          <Link to={'/profile/workforce'} className="mySpace" onClick={(e)=>handleClick("workforce")}>
            <div className="vrSlide"></div>
            <div className="ncImg">
            <img src={workforceg} alt="" />
            <img src={workforcer} alt="" />
            </div>
            <p>Workforce</p>
          </Link>
          <Link to={'/profile/inventory'} className="mySpace">
            <div className="vrSlide"></div>
            <div className="ncImg">
            <img src={inventoryg} alt="" />
            <img src={inventoryr} alt="" />
            </div>
            <p>Inventory</p>
          </Link>
          <Link to={'/profile/settings'} className="mySpace">
            <div className="vrSlide"></div>
            <div className="ncImg">
            <img src={settingg} alt="" />
            <img src={settingr} alt="" />
            </div>
            <p>Settings</p>
          </Link>
        </div>
        </div>
        <button>LOGOUT</button>
      </div>
    </>
  );
}

export default PLNewcontent;
