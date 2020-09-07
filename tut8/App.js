import React from 'react';
import './App.css';

function App()
{
  const name = 'Shailesh';

  // Date object creation
  const currDate = new Date();

  // inline css in react native is an object
  const heading = {
    margin: '0',
    padding: '10px',
    color: 'white',
    textTransform: 'capitalize',
    textAlign: 'center',
    backgroundColor: 'black',
  };

  return (
    <div className='app'>
      <h1 style={heading}> {`Hello! this is ${ name }`}</h1>
      <p>
        Welcome to Node JS tutorial!
      </p>

      {/* Inline css is also declared as */}
      <span style={{ color: 'green', fontWeight: 'bold', }}>Todays date is: </span>
      <strong>{currDate.toLocaleDateString()}.</strong>
      <br />
      <span>Current time is: </span>
      <strong>{currDate.toLocaleTimeString()}.</strong>
      <br />
      <span>Todays date is: </span>
      <strong>{currDate.getDate()}.</strong>
      <br />
      <span>Current month is: </span>
      <strong>{currDate.getMonth() + 1}.</strong>
      <br />
      <span>Current year is: </span>
      <strong>{currDate.getFullYear()}.</strong>
    </div>
  );
}

export default App;
