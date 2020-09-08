import React from 'react';

function App()
{
  const arr = ['Sunny', 'Shailesh', 'Saket'];
  arr.map( (cvalue) => {
    console.log(cvalue)
  } );
  return (
    <div className='app'>
    </div>
  );
}

export default App;