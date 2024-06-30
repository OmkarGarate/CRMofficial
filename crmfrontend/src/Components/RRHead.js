import React, { useState } from 'react';
import '../css/rr.css';

function RRHead() {
    const defaultStyles = {
        outc: {
            backgroundColor: '#E8E8E8',
            display: 'flex',
            justifyContent: 'start',
            transition: '0.5s ease-in-out'
        },
        inc: {
            backgroundColor: '#767676'
        },
        parac: {
            color: '#000000'
        }
    };

    const toggledStyles = {
        outc: {
            backgroundColor: '#CFFF51',
            display: 'flex',
            justifyContent: 'end',
            transition: '0.5s ease-in-out'
        },
        inc: {
            backgroundColor: '#008004'
        },
        parac: {
            color: '#800000'
        }
    };

    const toggleTexts = [
        'Create / Edit Profile', 'Check Reports', 'Manage Designation', 'Fill Payslips',
        'Manage Inventory', 'Analytics', 'Give Remarks'
    ];

    const [stylesArray, setStylesArray] = useState([
        { ...defaultStyles }, { ...defaultStyles }, { ...defaultStyles }, { ...defaultStyles },
        { ...defaultStyles }, { ...defaultStyles }, { ...defaultStyles }
    ]);

    const handleHeadToggle = (index) => {
        setStylesArray(stylesArray.map((styles, i) =>
            i === index
                ? styles.outc.backgroundColor === defaultStyles.outc.backgroundColor
                    ? { ...toggledStyles }
                    : { ...defaultStyles }
                : { ...styles }
        ));
    };

    return (
        <>
            <div className="rrEmployee">
                <div className="rrHeading">
                    <h3>Roles & Responsibilities</h3>
                </div>
                <div className="generalmain">
                    <p>General</p>
                    <div className="gcontent">
                        <p>Give Work Attendance and Write Reports</p>
                        <p>Follow <span>‘My Work’</span> in Profile</p>
                    </div>
                </div>

                <div className="generalmain">
                    <p className='ashead'>As Head</p>
                    <div className="headToggles">
                        {stylesArray.map((styles, index) => (
                            <div key={index} className="htoggle1">
                                <p style={styles.parac}>{toggleTexts[index]}</p>
                                <div onClick={() => handleHeadToggle(index)} style={styles.outc} className="toggleoutcircle">
                                    <div style={styles.inc} className="toggleincircle"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="customrules">
                    <p>Custom Rules</p>
                    <input type="text" placeholder='Write' />
                </div>
                <div className="saveBtn saveBtnHead">
                    <button>Save</button>
                </div>
            </div>
        </>
    );
}

export default RRHead;
