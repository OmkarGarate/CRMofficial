import React, { useState } from 'react';
import '../css/orgsignup.css';
import Navbar from './Navbar';
import view from '../Images/view.png';
import hide from '../Images/hide.png';
import { useSignupOrg } from '../hooks/useSignupOrg';
import checkMark from '../Images/check-mark.png'

function OrgSignup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [tnc, setTnc] = useState(false);
    const userType = "Org"
    const [orgId, setOrgId] = useState('');
    const [empId, setEmpId] = useState('');
    const [conf, setConf] = useState("");
    const [check, setCheck] = useState({
        display: "none"
    })
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);

    const handleClick = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handleClick2 = () => {
        setPasswordVisible2(!passwordVisible2);
    };

    const generateOrgId = (name) => {
        const maxLength = 7; // Maximum length of the ID
        let orgId = ''; // Initialize organization ID
    
        // Remove spaces and convert name to uppercase
        const processedName = name.replace(/\s+/g, '').toUpperCase();
    
        // Calculate the length of the name
        const nameLength = processedName.length;
    
        // Determine the number of characters to include from the name
        const numCharsFromName = Math.min(maxLength - 2, nameLength); // Ensure space for numbers
    
        // Add characters from the name to the ID
        for (let i = 0; i < numCharsFromName; i++) {
            orgId += processedName[i];
        }
    
        // Generate random numbers to fill the remaining space in the ID
        const numNumbers = maxLength - numCharsFromName;
        for (let i = 0; i < numNumbers; i++) {
            orgId += Math.floor(Math.random() * 10); // Add random number between 0 and 9
        }
    
        // Shuffle the ID to mix characters and numbers
        // orgId = shuffle(orgId.split('')).join('');
    
        return orgId;
    };
    
    // Function to shuffle an array
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    const { signupOrg, error, isLoading } = useSignupOrg();

    const handleCompanyNameChange = (e) => {
        const newName = e.target.value;
        setCompanyName(newName);
        setOrgId(generateOrgId(newName));
        setEmpId(generateEmployeeId(fullName, companyName))
    };

    const generateEmployeeId = (firstName, companyName) => {
        const maxLength = 7; // Maximum length of the ID
        let employeeId = ''; // Initialize employee ID
    
        // Remove spaces and convert names to uppercase
        const processedFirstName = firstName.replace(/\s+/g, '').toUpperCase();
        const processedCompanyName = companyName.replace(/\s+/g, '').toUpperCase();
    
        // Concatenate the first 3 characters of the first name and the first 4 characters of the company name
        employeeId = processedFirstName.slice(0, 3) + processedCompanyName.slice(0, 2);
    
        // Add random numbers to fill the remaining space in the ID
        const numNumbers = maxLength - employeeId.length;
        for (let i = 0; i < numNumbers; i++) {
            employeeId += Math.floor(Math.random() * 10); // Add random number between 0 and 9
        }

        employeeId = shuffle(employeeId.split('')).join('');
    
        return employeeId;
    };
    

    const handleSubmit = async (e) =>{
        e.preventDefault()

        await signupOrg(fullName, email, phoneNumber, password, companyName, companyEmail, orgId, empId, tnc, userType);

        if(!error){
            setConf("Successfully Registered!!")
        }
    }

    const handleCheck = () =>{
        if(tnc)
        {
        setCheck({
            display: "none"
        })
        }else{
        setCheck({
            display: "block"
        })
        }
    }

    

    return (
        <>
            <Navbar />
            <div className="orgSignupMain">
                <h1>
                    Empower Your Business with <span>BRIF!</span>
                </h1>
                <p>Revolutionize Your Operations with Professional Software Solutions</p>
                <div className="osko">
                    <div className="keyFeat">
                        <h3>Key Features</h3>
                        <div className="kfs">
                            <i>Easy User Experience</i>
                            <i>Modern Features</i>
                            <i>Data Analytics</i>
                            <i>Upto 1TB space</i>
                        </div>
                        <div className="conts">
                            <h3>Get Organisation ID Today,</h3>
                            <button>Connect to Sales</button>
                        </div>
                    </div>
                    <form className="osForm" onSubmit={handleSubmit}>
                        <h1>Organisation Sign Up</h1>
                        <div className="osfIn">
                            <div className="osf">
                                <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="number" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                <div className="passBox">
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="Create Password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="pvh">
                                        <img
                                            src={passwordVisible ? view : hide}
                                            alt={passwordVisible ? 'hide' : 'view'}
                                            onClick={handleClick}
                                        />
                                    </div>
                                </div>
                                <div className="passBox">
                                    <input
                                        type={passwordVisible2 ? 'text' : 'password'}
                                        placeholder="Re-Enter Password"
                                        value={password2} onChange={(e) => setPassword2(e.target.value)}
                                    />
                                    <div className="pvh">
                                        <img
                                            src={passwordVisible2 ? view : hide}
                                            alt={passwordVisible2 ? 'hide' : 'view'}
                                            onClick={handleClick2}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="osf">
                                <input type="text" placeholder="Company Name" value={companyName} onChange={handleCompanyNameChange}  />
                                <input type="email" placeholder="Company Email" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} />
                                <input type="text" placeholder="Organisation ID" value={orgId != '' ? orgId : "Organisation ID"} readOnly />
                                <input type="text" placeholder="Employee ID" value={empId != '' ? empId: "Employee ID"} readOnly />
                                <div className="tnc">
                                    <img src={checkMark} alt="checkMark" style={check}/>
                                    <input type="checkbox" onChange={(e)=>setTnc(!tnc)} onClick={handleCheck}/>
                                    <p>
                                        By Checking this box, you accept our <br />{' '}
                                        <span>Terms of Services</span>
                                    </p>
                                </div>
                                <div>
                                <button>Get Started</button>
                                {!error && error!= '' ?(<div className="success">{conf}</div>) : (<div className="error">{error}</div>) }
                                </div>

                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default OrgSignup;
