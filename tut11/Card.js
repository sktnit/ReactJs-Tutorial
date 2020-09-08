//Functional component of react
import React from 'react';
import './Card.css'

function Card(props)
{
  return (
    <div className="card">
      <img src={props.imgsrc} alt='Banner' className="card__img" />
      <div className="card__info">
        <span className="card__category">{props.title}</span>
        <h3 className="card__title">{props.name}</h3>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  )
}

export default Card
