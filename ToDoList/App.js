import React, { useState } from 'react';
import './App.css'

function App()
{
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) =>
  {
    setInputList(event.target.value);
  }

  const listofItems = () =>
  {
    setItems((oldArr) =>
    {
      return [...oldArr, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) =>
  {
    setItems((oldArr) =>
    {
      return oldArr.filter((arrElem, ind) =>
      {
        return ind !== id;
      })
    });
  }

  return (
    <div className='app'>
      <div className='center_div'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type='text' placeholder='Add an item' value={inputList} onChange={itemEvent} />
        <button onClick={listofItems}>+</button>
        <ol>
          {
            items.map((item, ind) =>
            {
              return (
                <div className="todo_style">
                  <i class="fa fa-times" area-hidden="true" onClick={() =>
                  {
                    deleteItem(ind)
                  }} />
                  <li>{item}</li>
                </div>
              )
            })
          }
        </ol>
      </div>
    </div>);
}

export default App;