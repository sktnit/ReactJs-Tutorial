import React, { useState } from 'react';

// events in react
function App()
{
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState('');

  const inpEvent = (event) =>
  {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const subEvent = () =>
  {
    // event.preventDefault();
    setFullName(name);
  }

  return (
    <div>
      <h1>Hello {fullName}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        defaultValue=""
        onChange={inpEvent}
        value={name}
      />
      <button onClick={subEvent}>Click Me</button>
    </div>);
}

export default App;