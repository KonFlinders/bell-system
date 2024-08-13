import { useState } from 'react'
import BellSystemPage from './pages/BellSystemPage';
import SettingsPage from './pages/SettingsPage';
import './App.css'

function App() {
  
  const [page, setPage] = useState(0);
  
  switch (page) {
    case 0:
      return (
      <div className='main'>
        <button className="bellSystemButtonOff" onClick={()=>setPage(1)}>
          Start
        </button>
        <h1>
          Bell system is off
        </h1>
        <button onClick={() => setPage(2)}>
          Settings
        </button>
      </div>
    )
    case 1:
      return (
        <div className='main'>
          <button className="bellSystemButtonOn" onClick={() => setPage(0)}>
            Stop
          </button>
          <BellSystemPage />
        </div>
      )
    case 2:
      return (
        <>
          <button onClick={() => setPage(0)}>
            Home
          </button>
          <SettingsPage />
        </>
      )
    }
}


export default App;