import { useState, useEffect } from 'react'


function Clock (props) {
  const [date, setDate] = useState(() => Date.now());
  const [countDown, setCountDown] = useState({hours: '00', min: '00'}); 
  const d = new Date(date);

  useEffect(() => {
    const dateRefresh = setInterval(() => check(), 1000);
    return () => {
      clearInterval(dateRefresh);
    };
  }, []);


  //Calls CheckTime every minute. sec === 1 || sec === 15 || sec === 30 || sec === 45
  function check () {
    const d = new Date(Date.now());
    const sec = d.getSeconds();
    if (sec === 1 || sec === 15 || sec === 30 || sec === 45) {
    props.checkTime();
    setCountDown(calcCountDown());
    }
    setDate(Date.now());
  }

  function calcCountDown () {
    let currentDay = d.getDay();
    let b = [];
    let daysInWeek = 7;


    for (let i = 0; i < daysInWeek; i++) {
      const a = props.SCHEDULE.Weekdays[(currentDay+i) % daysInWeek].map(x => parseFloat(x));
      const hourOffset = i * 2400;
      for (let i = 0; i < a.length; i++) {
        b.push(a[i] + hourOffset).sort;
      }
    }

    for (let i = 0; i < b.length; i++) {
      if (b[0] < currentTimeInt()) {
        b.shift();
      } else {
        break;
      }
    }

    let timeStampHour = parseFloat(b[0].toString().slice(0,2));
    let currentTimeHour = parseFloat(currentTimeInt().toString().slice(0,2));

    let minTill = ((b[0] - currentTimeInt()) % 60).toString();
    let hourTill = Math.abs((currentTimeHour - timeStampHour)).toString();

    return ({
      ...countDown,
      hours: hourTill,
      min: minTill,
    });

  }

  function currentTimeInt () {
    let d = new Date(Date.now());
    return parseFloat(String(`${props.padZeros(d.getHours(),2)}${props.padZeros(d.getMinutes(),2)}`));
  }

  return (
      <>
        <div className='Clock'>
          {props.padZeros(d.getHours(), 2)}:
          {props.padZeros(d.getMinutes(), 2)}:
          {props.padZeros(d.getSeconds(), 2)}
        </div>
        <div className='Countdown'>
          {countDown.hours}:{countDown.min}
        </div>
      </>
  )
}

export default Clock