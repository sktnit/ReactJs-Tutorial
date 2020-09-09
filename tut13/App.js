import React, { useState } from 'react';

// useState funtion in react 
function App()
{
  const [count, setCount] = useState(0);

  const incNum = () =>
  {
    setCount(count + 1);
    console.log('clicked' + count);
  }


  return (
    <div className='app'>
      <h1>{count}</h1>
      <button onClick={incNum} > Click Me</button>
    </div>
  );
}

export default App;