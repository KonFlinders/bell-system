import { useState } from 'react'
import BellSystemPage from './pages/BellSystemPage';
import SettingsPage from './pages/SettingsPage';
import NavigationButton from './components/NavigationButton';
import BellSystemButton from './components/BellSystemButton';
import AlertProvider from './context/AlertsContext';
import './App.css'

function Navigation() {

  const [page, setPage] = useState(0);  

  switch (page) {
    case 0: {
      return (
        <div className='main'>
          <BellSystemButton className="bellSystemButtonRed" onEvent={() => setPage(1)}>Start</BellSystemButton>
          <h1>
            Bell system is off
          </h1>
          <NavigationButton onEvent={() => setPage(2)}>Settings</NavigationButton>
        </div>
      )
    }

    case 1: {
      return (
        <div className='main'>
          <BellSystemButton className="bellSystemButtonGreen" onEvent={() => setPage(0)}>Stop</BellSystemButton>
          <BellSystemPage />
        </div>
      )
    }

    case 2: {
      return (
        <>
          <NavigationButton onEvent={() => setPage(0)}>Home</NavigationButton>
          <SettingsPage />
        </>
      )
    }
    
    default: {
      throw Error(`Unknown page number: ${page}`)
    }
  }
}

function App() {
  return (
    <AlertProvider>
      {Navigation()}
    </AlertProvider>
  )
}


export default App;