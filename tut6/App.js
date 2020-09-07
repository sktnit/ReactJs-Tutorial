import React from 'react';
import './App.css';

function App()
{
  // variable declaration
  const name = 'Shailesh';
  const number = 5;
  return (

    // template literals: ` `
    <div className='app'>
      <h1> `Hello! This is ${name}`</h1>
      <p>
        Welcome to Node JS tutorial!
      </p>
      <span>This is tutorial number </span>
      <strong>{number}.</strong>

    </div>
  );
}
export default App;
