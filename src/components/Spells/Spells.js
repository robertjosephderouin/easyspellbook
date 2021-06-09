import React from 'react';
import Card from '../Card/Card';
import './Spells.css';
import { Link } from 'react-router-dom';

const Spells = ({spells, memorizeSpell}) => {

  const spellCards = spells.map(spell => {
    return (
      <article className="card">
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`${spell.index}`} key={spell.url}>
          <Card
            name={spell.name}
          />
        </Link>
        <button id={spell.name} onClick={() => memorizeSpell(spell.name)}>Memorize Spell</button>
      </article>
    )
  })

  return (
    <div className='spellsContainer'>
      {spellCards}
    </div>
  )
}


export default Spells;
