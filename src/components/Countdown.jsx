import padZeros from "../functions/padZeros";
import schedule from "../data/schedule";
import Bell from "./Bell";


function Countdown(props) {
  const date = props.date;
  const currentDay = date.getDay();
  const currentHour = date.getHours();
  const currentMin = date.getMinutes();
  const currentTimeStamp = String(`${padZeros(currentHour,2)}${padZeros(currentMin,2)}`);
  const currentTimeMin = calcMin(currentTimeStamp);
  const numOfWeekDays = Object.keys(schedule.Weekdays).length;
  const countDown = calcCountDownMin();

  // Takes a string in the format hhmm and returns the total number of minutes
  function calcMin(timeStamp) {
    const hour = parseFloat(timeStamp.slice(0,2)) * 60;
    const min = parseFloat(timeStamp.slice(2,4));
    return hour + min;
  }

  // Returns the number of hours and minutes until the next scheduled time
  function calcCountDownMin() {
    
    let scheduleMin = []; // An array of all the scheduled times for the week in minutes from the beginning of today
    
    // Populates scheduleMin
    for (let i = 0; i < numOfWeekDays + 1; i++) {
      const fromToday = (currentDay + i) % numOfWeekDays // The day of the week counting from today
      const fromTodayOffset = i * 24 * 60; // The number of minutes to add based on the weekday's distance from today
      const scheduleDayMin = schedule.Weekdays[fromToday].map(x => calcMin(x)); // The weekday's schedule in minutes from the beginning of the day
      scheduleDayMin.forEach(element => {
         scheduleMin.push(element + fromTodayOffset); // Push to scheduleMin
      });
    }

    scheduleMin.sort; // Sort schedule in ascending order

    // Leaves the next scheduled time as the first item in scheduleMin
    for (let i = 0; i < scheduleMin.length; i++) {
      if (scheduleMin[0] < currentTimeMin) {
        scheduleMin.shift();
      } else {
        break;
      }
    }

    const totalMinTill = scheduleMin[0] - currentTimeMin;
    const hoursTill = padZeros(Math.floor(totalMinTill / 60), 2);
    const minTill = padZeros((totalMinTill % 60), 2);

    return (`${hoursTill}:${minTill}`);
  }
  
  return (
    <>
      {countDown}
      <Bell countDown={countDown}></Bell>
    </>
  )
}

export default Countdown;