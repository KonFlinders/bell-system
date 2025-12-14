import { useAlert, useAlertDispatch } from "../context/AlertsContext";

function Alert () {
  const alert = useAlert();
  const dispatch = useAlertDispatch();

  return (
    <div className="alertContainer">
      <ul>
        {alert.map( alert => (
          <li className={'alert '+alert.level} key={alert.id}>
            <div className={'alertButton '+alert.level} onClick={() => {dispatch({
              action: 'DISMISS',
              id: alert.id,
              })}}>
              <span>
                &times;
              </span>
            </div>
            {alert.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Alert;