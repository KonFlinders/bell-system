import { useState } from 'react'
import BellSystemPage from './pages/BellSystemPage';
import SettingsPage from './pages/SettingsPage';
import NavigationButton from './components/NavigationButton';
import BellSystemButton from './components/BellSystemButton';
import './App.css'
import Alert from './components/Alert';


function App() {
  
  const [page, setPage] = useState(0);
  
  switch (page) {
    case 0:
      return (
        <>
          <Alert></Alert>
          <div className='main'>
            <BellSystemButton className="bellSystemButtonRed" onEvent={() => setPage(1)}>Start</BellSystemButton>
            <h1>
              Bell system is off
            </h1>
            <NavigationButton onEvent={() => setPage(2)}>Settings</NavigationButton>
          </div>
        </>
      )
    case 1:
      return (
        <>
          <Alert></Alert>
          <div className='main'>
            <BellSystemButton className="bellSystemButtonGreen" onEvent={() => setPage(0)}>Stop</BellSystemButton>
            <BellSystemPage />
          </div>
        </>
      )
    case 2:
      return (
        <>
          <Alert></Alert>
          <NavigationButton onEvent={() => setPage(0)}>Home</NavigationButton>
          <SettingsPage />
        </>
      )
    }
}


export default App;