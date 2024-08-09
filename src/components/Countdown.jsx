import React from "react";
import padZeros from "../functions/padZeros"



function Countdown(props) {
  const date = props.date;
  const SCHEDULE = props.SCHEDULE;
  const currentTimeInt = parseFloat(String(`${padZeros(date.getHours(),2)}${padZeros(date.getMinutes(),2)}`));
  const day = date.getDay();
  const daysInWeek = 7;
  const countDown = calcCountDown();

  function calcCountDown() {
    let b = [];

    for (let i = 0; i < daysInWeek; i++) {
      const a = SCHEDULE.Weekdays[(day+i) % daysInWeek].map(x => parseFloat(x));
      const hourOffset = i * 2400;
      for (let i = 0; i < a.length; i++) {
        b.push(a[i] + hourOffset).sort;
      }
    }

    for (let i = 0; i < b.length; i++) {
      if (b[0] < currentTimeInt) {
        b.shift();
      } else {
        break;
      }
    }

    let timeStampHour = parseFloat(b[0].toString().slice(0,2));
    let currentTimeHour = parseFloat(currentTimeInt.toString().slice(0,2));

    let minTill = padZeros(((b[0] - currentTimeInt) % 60).toString(), 2);
    let hourTill = padZeros(Math.abs((currentTimeHour - timeStampHour)).toString(), 2);

    return ({
      hours: hourTill,
      min: minTill,
    });
  }

  return (
    <div className="Countdown">
      {countDown.hours}:{countDown.min}
    </div>
  )
}

export default Countdown;