import { useState, useEffect } from 'react'
import Countdown from './Countdown';
import Bell from "./Bell";
import padZeros from "../functions/padZeros"

const SCHEDULE = {
  Weekdays: {
    0: ['1200',],
    1: ['1200','1600','1615','1616','1620','1630','1640','1650','2127'],
    2: ['1200','1500',],
    3: ['1200',],
    4: ['1200','2035'],
    5: ['0839', '1046','1200','1500','1952'],
    6: ['1200',],
  },
  ExcludedDates: [],
}

function Clock () {
  const [date, setDate] = useState(new Date(Date.now()));

  useEffect(() => {
    const dateRefresh = setInterval(() => setDate(new Date(Date.now())), 1000);
    
    return () => {
      clearInterval(dateRefresh);
    };
  }, []);

  return (
      <>
        <div className='Clock'>
          {padZeros(date.getHours(), 2)}:
          {padZeros(date.getMinutes(), 2)}:
          {padZeros(date.getSeconds(), 2)}
        </div>
        <div className='Countdown'>
          <Countdown date={date} SCHEDULE={SCHEDULE}/>
          <Bell date={date} SCHEDULE={SCHEDULE}/> 
        </div>
      </>
  )
}

export default Clock;