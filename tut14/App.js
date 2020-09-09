import React, { useState } from 'react';

// Digital clock
function App()
{
  let time = new Date().toLocaleTimeString();
  const [timer, setTimer] = useState(time);

  const clock = () =>
  {
    time = new Date().toLocaleTimeString();
    setTimer(time);
  }

  setInterval(clock, 1000);


  return (
    <div className='app'>
      <h1>{timer}</h1>
    </div>
  );
}

export default App;