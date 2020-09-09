import React from 'react';

// Array Destructuring 
function App()
{
  const arr = ['c', 'c++', 'java', 'python']

  let [a, b, c, d] = arr;

  const disp = () =>
  {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  }
  return (
    <div className='app'>
      <h1>Destructuring of Array</h1>
      {
        disp()
      }
    </div>
  );
}

export default App;