import React from "react";
import { useEffect } from "react";
import useSound from "use-sound";
import dingDong from "../assets/ding-dong.opus"
import padZeros from "../functions/padZeros"

function Bell (props) {
  const date=props.date;
  const SCHEDULE=props.SCHEDULE;
  const [bell] = useSound(dingDong);
  const sec = date.getSeconds();
  const day = date.getDay();
  const dateStr = String(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`);
  const timeStr = String(`${padZeros(date.getHours(),2)}${padZeros(date.getMinutes(),2)}`);

  useEffect(() => {
    if (sec === 0) {
      if (SCHEDULE.ExcludedDates.indexOf(dateStr) < 0) {
        if (SCHEDULE.Weekdays[day].indexOf(timeStr) >= 0) {
          bell();
          console.log("Bell Rung!");
        } else {
          console.log("Bell Not Rung");
        }
      } else {
        console.log("The bell is off today.");
      }
    }
  },[date])

  return (
      <>
      </>
  )
}

export default Bell;