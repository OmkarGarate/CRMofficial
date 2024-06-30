import React, { useState } from 'react'
import plusb from '../Images/plusb.png'
import search from '../Images/search.png'
import '../css/alldepartment.css'
import '../css/myspace.css'
import { Link } from 'react-router-dom'



function AllDepartment() {

const [btnColor, setBtnColor] = useState({
    color:'#800000',
        border: '2px solid #800000'
})
const [btnColor1, setBtnColor1] = useState({
    color:'#767676',
        border: '2px solid #767676'
})


const handleBtnColor = () => {
    setBtnColor({
        color:'#800000',
        border: '2px solid #800000'
    })

    setBtnColor1({
        color:'#767676',
        border: '2px solid #767676'
    })
}


const handleBtnColor1 = () => {
    setBtnColor1({
        color:'#800000',
        border: '2px solid #800000'
    })

    setBtnColor({
        color:'#767676',
        border: '2px solid #767676'
    })
}

  return (
    <>
    <div className="allDepartment mySpaceMain">
        <div className="allDepartTop">
            <h1>Departments</h1>
            <Link to={"/mwis/createdesignation"}>
            <div className="createDepart">
                <p>Create Designation</p>
                <img src={plusb} alt="Create" />
            </div>
              </Link>
            <div className="searchDepart">
                <img src={search} alt="Search" />
                <input type="text" placeholder='Search Departments'/>
            </div>
        </div>

        <div className="allDepartBottom">
            <div className="allDSort">
                <p>Sort</p>
                <button style={btnColor} onClick={handleBtnColor} >A to Z</button>
                <button style={btnColor1} onClick={handleBtnColor1} >Z to A</button>
            </div>
            <div className="allDContent adtc">
                <div className="department1">Accounting</div>
                <div className="department1">Administration</div>
                <div className="department1">Civil & Structural</div>
                <div className="department1">Customer Service</div>
                <div className="department1">Design</div>
                <div className="department1">Finance</div>
                <div className="department1">Human Resources</div>
                <div className="department1">IT</div>
                <div className="department1">Logistics</div>
                <div className="department1">Maintenance</div>
                <div className="department1">Marketing</div>
                <div className="department1">Mechanical</div>
                <div className="department1">Operations</div>
                <div className="department1">Procurement</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AllDepartment