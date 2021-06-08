import React from 'react';
import './Card.css';

const Card = ({ index, name, url }) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>{index}</p>
      <p>{url}</p>
    </article>
  )
}

export default Card;
