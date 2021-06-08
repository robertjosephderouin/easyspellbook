import React from 'react';
import Card from '../Card/Card';
import './Spells.css';
import { Link } from 'react-router-dom';

const Spells = ({spells}) => {

  const spellCards = spells.map(spell => {
    return (
      <Link to={`${spell.index}`} key={spell.url}>
        <Card
          name={spell.name}
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
