import { useState } from 'react'
import Clock from './components/Clock.jsx'
import './App.css'

function App() {
  
  const [bellSystem, setBellSystem] = useState(false);
  
  if (bellSystem) {
    return (
    <>
      <header>
        <h1>
          <Clock />
        </h1>
        <button onClick={() => {setBellSystem(false)}}>
          Stop Bell System
        </button>
      </header>
    </>
    )
  } else {
    return (
      <>
        <header>
          <button onClick={()=>{setBellSystem(true)}}>
            Start Bell System
          </button>
        </header>
      </>
    )
  }
}


export default App;