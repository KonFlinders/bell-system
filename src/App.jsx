import { useState, useEffect, useRef } from 'react'
import useSound from 'use-sound'
import Clock from './components/Clock.jsx'
import dingDong from './assets/ding-dong.opus'
import './App.css'


const SCHEDULE = {
  Weekdays: {
    0: ['1200',],
    1: ['1200','1600','1615','1616','1620','1630','1640','1650','2127'],
    2: ['1200','1500',],
    3: ['1200',],
    4: ['1200',],
    5: ['1200','1500','1952'],
    6: ['1200',],
  },
  ExcludedDates: [],
}

function App() {
  const [bell] = useSound(dingDong);
  const [ringBell, setRingBell] = useState(false);
  const [bellSystem, setBellSystem] = useState(false);
  
  // Rings and then clears the bell when setRingBell state is changed to true.
  useEffect(() => {
    if (ringBell === false) {
      return
    } else {
      bell();
      setRingBell(false);
    }
  }, [ringBell]);

  // This function is called every minute by Clock.jsx to check if the bell needs to ring.
  function checkTime () {
    let d = new Date(Date.now());
    let day = d.getDay();

    if (SCHEDULE.ExcludedDates.indexOf(currentDateString()) < 0) {
      if (SCHEDULE.Weekdays[day].indexOf(currentTimeString()) >= 0) {
        setRingBell(true);
        console.log("Bell Rung!");
      } else {
        console.log("Bell Not Rung");
        return
      }
    } else {
      console.log("The bell is off today.");
      return
    } 
  }
  
  // Returns the current date in format dmyyyy
  function currentDateString () {
    let d = new Date(Date.now());
    return String(`${d.getDate()}${d.getMonth()}${d.getFullYear()}`);
  }
  
  // Returns the current time in format hhmm
  function currentTimeString () {
    let d = new Date(Date.now());
    return String(`${padZeros(d.getHours(),2)}${padZeros(d.getMinutes(),2)}`);
  }

  // Takes a string and a number and returns a string padded with zeros
  function padZeros(string, n) {
    return String(string).padStart(n,"0");
  }
  
  if (bellSystem) {
    return (
    <>
      <header>
        <h1>
          <Clock checkTime={checkTime} padZeros={padZeros} SCHEDULE={SCHEDULE}/>
        </h1>
        <button onClick={() => {setBellSystem(false)}}>
          Stop Bell System
        </button>
      </header>
    </>
    )
  } else {
    return (
      <>
        <header>
          <button onClick={()=>{setBellSystem(true)}}>
            Start Bell System
          </button>
        </header>
      </>
    )
  }
}


export default App