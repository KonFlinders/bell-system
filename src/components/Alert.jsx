import { useAlert, useAlertDispatch } from "../context/AlertsContext";

function Alert() {
  const alert = useAlert();
  const dispatch = useAlertDispatch();

  if (alert.length > 0) {
    return (
      <div className="alertContainer">
        <ul className="alertList">
          {alert.map((alert) => (
            <li className={"alert " + alert.level} key={alert.id}>
              <div
                className={"alertButton " + alert.level}
                onClick={() => {
                  dispatch({
                    action: "DISMISS",
                    id: alert.id,
                  });
                }}
              >
                <span>&times;</span>
              </div>
              {alert.text}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Alert;
