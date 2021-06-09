import React from 'react';
import Card from '../Card/Card';
import './Spells.css';
import { Link } from 'react-router-dom';

const Spells = ({spells, findSpell, memorizeSpell, unmemorizeSpell, countSpell}) => {

  const spellCards = spells.map(spell => {
    return (
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`${spell.index}`} key={spell.url}>
        <article className="card">
            <Card name={spell.name}/>
            <p>{countSpell(spell.name)}</p>
            <button onClick={(e) => {e.preventDefault(); memorizeSpell(spell.name)}}>Memorize Spell</button>
            <button onClick={(e) => {e.preventDefault(); unmemorizeSpell(spell.name)}}>Unmemorize Spell</button>
        </article>
       </Link>
    )
  })

  return (
    <div className='spellsContainer'>
      {spellCards}
    </div>
  )
}


export default Spells;
