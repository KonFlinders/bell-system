import schedule from "../data/schedule";

function BellSystemButton({className, onEvent, children}) {

  let scheduleIsSet = false;
  Object.keys(schedule.Weekdays).forEach(key => {
    if (schedule.Weekdays[key].length > 0) {
      scheduleIsSet = true;
    }
  });

  if (scheduleIsSet) {
    return (
      <button className={className} onClick={onEvent}>
        {children}
      </button>
    )
  } else {
    return (
      <button className="bellSystemButtonDisabled" onClick={() => alert("No schedule set")}>
        Error
      </button>
    )
  }
}

export default BellSystemButton;