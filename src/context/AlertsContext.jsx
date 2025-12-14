import { useReducer, useContext, createContext } from "react";
import { createPortal } from "react-dom";
import alertReducer from "../functions/alertReducer";
import Alert from "../components/Alert";


const AlertContext = createContext(null);
const AlertDispatchContext = createContext(null);

const initialState = [];

// Provides the context needed to set and read alerts using useAlert and useAlertDispatch
function AlertProvider ({ children }) {

  const [alerts, dispatch] = useReducer(alertReducer, initialState);
  
  return (
    <AlertContext value={alerts}>
      <AlertDispatchContext value={dispatch}>
        {children}
        {createPortal(<Alert></Alert>, document.body)}
      </AlertDispatchContext>
    </AlertContext>
  )
}

export function useAlert() {
  return useContext(AlertContext);
}

export function useAlertDispatch () {
  return useContext(AlertDispatchContext);
}


export default AlertProvider;