import React, { useState } from 'react';

// spread operator
function App()
{
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
  });

  const [msg, setMsg] = useState(fullName);

  const inpEvent = (event) =>
  {
    event.preventDefault();
    // console.log("Event: ",event);
    // console.log("Event.target: ", event.target);
    const { name, value } = event.target;
    console.log("Event.target.name: ",[name]);
    event.preventDefault();

    setFullName((preValue) =>
    {
      return {
        ...preValue,
        [name]: value,
      }

      // if (name === "fName")
      // {
      //   return {
      //     fname: value,
      //     lname: preValue.lname
      //   };
      // }
      // else if (name === "lName")
      // {
      //   return {
      //     fname: preValue.fname,
      //     lname: value
      //   };
      // }
    });
  }

  const onSubmits = (event) =>
  {
    event.preventDefault();
    setMsg(fullName);
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
          <h1>Hello {msg.fname} {msg.lname}</h1>
          <input
            type="text"
            placeholder="Enter your first name"
            name="fname" //important
            onChange={inpEvent}
            value={fullName.fname}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            name="lname" //important 
            onChange={inpEvent}
            value={fullName.lname}
          />
          <button type="submit">Click Me</button>
        </div>
      </form>
    </div>);
}

export default App;