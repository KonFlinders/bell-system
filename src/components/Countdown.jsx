import React from "react";
import padZeros from "../functions/padZeros";
import schedule from "../data/schedule";


function Countdown(props) {
  const date = props.date;
  const SCHEDULE = schedule;
  const currentTimeMin = calcMin(String(`${padZeros(date.getHours(),2)}${padZeros(date.getMinutes(),2)}`));
  const day = date.getDay();
  const daysInWeek = 7;
  let b = [];
  const countDown = calcCountDown();

  //takes a string in the format hhmm and returns the number of minutes
  function calcMin(timeStamp) {
    let hour = parseFloat(timeStamp.slice(0,2)) * 60;
    let min = parseFloat(timeStamp.slice(2,4));
    return hour + min;
  }

  function calcCountDown() {
    for (let i = 0; i < daysInWeek; i++) {
      const a = SCHEDULE.Weekdays[(day+i) % daysInWeek].map(x => calcMin(x));
      const dayOffset = i * 24 * 60;
      for (let i = 0; i < a.length; i++) {
        b.push(a[i] + dayOffset).sort;
      }
    }

    for (let i = 0; i < b.length; i++) {
      if (b[0] < currentTimeMin) {
        b.shift();
      } else {
        break;
      }
    }

    let minTill = b[0] - currentTimeMin;
    let hours = padZeros(Math.floor(minTill / 60), 2);
    let min = padZeros((minTill % 60), 2);

    return ({
      hours: hours,
      min: min,
    });
  }

  function dateAdvanceBy (int) {
    const dateStr = String(`${date.getFullYear()}/${date.getMonth()}/${(parseFloat(date.getDate())+int).toString()}`);
    return dateStr;
  }
  
  if (SCHEDULE.ExcludedDates.indexOf(dateAdvanceBy(0)) >= 0) {
    return (
      <>
        Off today
      </>
    )
  } else if (SCHEDULE.ExcludedDates.indexOf(dateAdvanceBy(1)) >= 0 && b[0] > 24 * 60) {
    return (
      <>
        Off tomorrow
      </>
    )
  } else {
    return (
      <>
        {countDown.hours}:{countDown.min}
      </>
    )
  }
}

export default Countdown;