import React from 'react';
import Card from '../Card/Card';
import './Spells.css';
import { Link } from 'react-router-dom';

const Spells = ({spells}) => {

  const spellCards = spells.map(spell => {
    return (
      <Link to={`/${spell.url}`} key={spell.url}>
        <Card
          name={spell.name}
          index={spell.index}
          url={spell.url}
        />
      </Link>
    )
  })

  return (
    <div>
      {spellCards}
    </div>
  )
}


export default Spells;
