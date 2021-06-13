import './Card.css';

import React from 'react';

const Card = ({ index, name, url, memorizeSpell }) => {
  return (
    <article>
      <h2>{name}</h2>
    </article>
  )
}

export default Card;
