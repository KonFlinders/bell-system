import React from "react";

function Countdown(props) {

  let time = (props.bellSystem.date - props.bellSystem.next);
  let hours = time / 1000 / 60 / 60;
  let min = time / 1000 / 60;
  return (
    <div className="Countdown">
      {hours}:{min}
    </div>
  )
}

export default Countdown