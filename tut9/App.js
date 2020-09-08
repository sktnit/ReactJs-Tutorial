import React from 'react';
import './App.css';
// import all the functional component here 
// to access in App.js
import Card from './Card';

function App()
{
  return (
    <div className='app'>
      <h1 className='app__head'> List of Netflix Series</h1>

      {/* Card is a functional component  and name, imgsrc,
       title and links are the properties*/}
      {/* first card */}
      <Card
        name="DARK"
        imgsrc='https://wallpapercave.com/wp/wp4056410.jpg'
        title='Netflix Orginal Series'
        link='https://www.netflix.com/in/title/80990668?source=35'
      />

      {/* second card */}
      <Card
        name="Stranger Things"
        imgsrc='https://wallpapercave.com/wp/wp1917154.jpg'
        title='Netflix Orginal Series'
        link='https://www.netflix.com/in/title/80990668?source=35'
      />
    </div>
  );
}

export default App;
