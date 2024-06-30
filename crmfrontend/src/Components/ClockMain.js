import React, { useState, useEffect } from 'react';
import '../css/clockMain.css';
import clock from '../Images/clock.png';
import mclock from '../Images/mclock.png';
import analytics from '../Images/analytics.png';
import bell from '../Images/bell.png';
import head from '../Images/head.png';
import Clock from './Clock'

function ClockMain() {

const [cColor, setCColor] = useState()

  const [clIn, setClIn] = useState({
    display: "block",
  });
  const [clOut, setClOut] = useState({
    display: "none",
  });
  const [timeLeft, setTimeLeft] = useState(0);
  let timer; // Define timer here

  const handleClockin = () => {
    setClIn({
      display: 'none'
    });
    setClOut({
      display: "block"
    });
    setCColor({
      background: "linear-gradient(#FFFFFF, #E5FF9F)"
    });
    startTimer();
  };

  const handleClockout = () => {
    setClIn({
      display: "block"
    });
    setClOut({
      display: 'none'
    });
    setCColor({
      background: "linear-gradient(#FFFFFF, #FDD6D5)"
    });
    clearInterval(timer);
  };

  const startTimer = () => {
    setTimeLeft(21600); // 6 hours in seconds
    timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
    }, 21600000); // 6 hours in milliseconds
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setTimeLeft((prevTime) => prevTime - 1);
  };

  const formatTime = (timeLeft) => {
    const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const clockTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      <div className="clockMain">
        <div className="clockTop">
          <div className="clockImg"><img src={clock} alt="clock" /></div>
          <div className="analyticImg"><img src={analytics} alt="analytics" /></div>
          <div className="bellImg"><img src={bell} alt="notification" /></div>
        </div>

        <div className="clockin clockout" style={clOut}>
          <div className="cInUp">
            <div className="upLeft">
            {/* <Clock <div> className='clock' style={cColor} </div> /> */}
            <Clock>
  <div className='clock' style={cColor}></div>
</Clock>

              <p>{clockTime}</p>
            </div>
            <div className="upRgt upRgtt">
              <p>Session Goal:</p>
              <p>
                <span>{formatTime(timeLeft)}</span>
                Hrs
              </p>
              <div className="clockinBtnn"><button>Take Break</button></div>
              <div className="clockinBtn"><button onClick={handleClockout}>Clock Out</button></div>
            </div>
          </div>
          <div className="cInDown">Suggested Clock out is 03:00 PM or is Remarked</div>
        </div>

        <div className="clockin" style={clIn}>
          <div className="cInUp">
            <div className="upLeft">
            {/* < Clock style={cColor}/> */}
            <Clock>
  <div className='clock' style={cColor}></div>
</Clock>

            {/* <img src={mclock} alt="Live Clock" /> */}
              <p>{clockTime}</p>
            </div>
            <div className="upRgt">
              <p>Session Goal:</p>
              <p><span>06:00</span>Hrs</p>
              <div className="clockinBtn"><button onClick={handleClockin}>Clock In</button></div>
            </div>
          </div>
          <div className="cInDown">Suggested Clock in is 08:30 or is Remarked</div>
        </div>

        <div className="cReport">
          <div className="reportTo">
            <p>To:</p>
            <div className="head">
              <img src={head} alt="Head" />
              <p>Human Resource Head</p>
            </div>
            <div className="head">
              <img src={head} alt="Head" />
              <p>Project Head</p>
            </div>
          </div>
          <div className="reportContent">
            <input className='ipInput' type="text" placeholder='Write Before Time Report' />
            <hr />
            <input className='ipPara' type="text" />
          </div>
          <div className="reportSubmit"><button>Submit</button></div>
        </div>
      </div>
    </>
  );
}

export default ClockMain;
