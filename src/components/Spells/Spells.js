import React from 'react';
import Card from '../Card/Card';
import './Spells.css';
import { Link } from 'react-router-dom';

const Spells = ({spells, findSpell, toggleSpell}) => {

  const spellCards = spells.map(spell => {
    return (
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`${spell.index}`} key={spell.url}>
        <article className="card">
            <Card name={spell.name}/>
            <button onClick={(e) => {e.preventDefault(); toggleSpell(spell.name)}}>{findSpell(spell.name) ? "Unmemorize Spell" : "Memorize Spell"}</button>
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
