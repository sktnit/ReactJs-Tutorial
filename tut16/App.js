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

  const onSubmits = (event) =>
  {
    event.preventDefault();
    setFullName(name);
    setName("");
  }

  return (
    <div>
      <form onSubmit={onSubmits}>
        <div>
          <h1>Hello {fullName}</h1>
          <input
            type="text"
            placeholder="Enter your name"
            defaultValue=""
            onChange={inpEvent}
            value={name}
          />
          <button type="submit">Click Me</button>
        </div>
      </form>
    </div>);
}

export default App;