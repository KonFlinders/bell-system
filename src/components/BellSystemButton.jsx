import schedule from "../data/schedule";
import { useAlertDispatch } from "../context/AlertsContext";

function BellSystemButton({ className, onEvent, children }) {

  const dispatch = useAlertDispatch();

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
      <button className="bellSystemButtonDisabled" onClick={() => {dispatch({
        action: "ADD",
        id: +new Date(),
        level: "error",
        text: "The schedule is not set!"
        })}}>
        Error
      </button>
    )
  }
}

export default BellSystemButton;