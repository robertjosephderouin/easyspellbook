import React from 'react';
import Card from '../Card/Card';
import './Spells.css';
import { Link } from 'react-router-dom';

const Spells = ({spells, memorizeSpell, unmemorizeSpell, findSpell}) => {

  const spellCards = spells.map(spell => {
    return (
      <article className="card">
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`${spell.index}`} key={spell.url}>
          <Card
            name={spell.name}
          />
        </Link>
        { findSpell(spell.name) && <button id={spell.name} onClick={() => unmemorizeSpell(spell.name)}>Unmemorize Spell</button>}
        { !findSpell(spell.name) && <button id={spell.name} onClick={() => memorizeSpell(spell.name)}>Memorize Spell</button>}
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
