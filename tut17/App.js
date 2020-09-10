import React, { useState } from 'react';

// events in react
function App()
{
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
  });

  const inpEvent = (event) =>
  {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    event.preventDefault();

    setFullName((preValue) =>
    {
      if (name === "fName")
      {
        return {
          fname: value,
          lname: preValue.lname
        };
      }
      else if (name === "lName")
      {
        return {
          fname: preValue.fname,
          lname: value
        };
      }
    });
  }

  const onSubmits = (event) =>
  {
    event.preventDefault();
    setFullName(() =>
    {
      return {
        fname: "",
        lname: "",
      };
    })
  }

  return (
    <div>
      <form onSubmit={onSubmits}>
        <div>
          <h1>Hello {fullName.fname} {fullName.lname}</h1>
          <input
            type="text"
            placeholder="Enter your first name"
            defaultValue=""
            name="fName"
            onChange={inpEvent}
            value={fullName.fname}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            defaultValue=""
            name="lName"
            onChange={inpEvent}
            value={fullName.lname}
          />
          <button type="submit">Click Me</button>
        </div>
      </form>
    </div>);
}

export default App;