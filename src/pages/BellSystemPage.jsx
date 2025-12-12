import { useState, useEffect } from 'react';
import Countdown from '../components/Countdown';
import Clock from '../components/Clock';

function BellSystemPage() {
  const [date, setDate] = useState(new Date(Date.now()));

  useEffect(() => {
    const dateRefresh = setInterval(() => setDate(new Date(Date.now())), 1000);
    
    return () => {
      clearInterval(dateRefresh);
    };
  }, []);

  return (
    <div className='BellSystemPage'>
      <div className='Clock'>
        <Clock date={date}/>
      </div>
      <div className='Countdown'>
        <Countdown date={date}/>
      </div>
    </div>
  )
}

export default BellSystemPage;