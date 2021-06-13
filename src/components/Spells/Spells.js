import './Spells.css';

import React from 'react';

import { Link } from 'react-router-dom';

import Card from '../Card/Card';

const Spells = ({spells, findSpell, memorizeSpell, unmemorizeSpell, countSpell}) => {

  const spellCards = spells.map(spell => {
    return (
      <Link className="card-container" style={{ color: 'inherit', textDecoration: 'inherit'}} to={`${spell.index}`} key={spell.url}>
        <article className="card">
            <Card name={spell.name}/>
            <p className="count">[{countSpell(spell.name)}]</p>
            <button className="button" onClick={(e) => {e.preventDefault(); memorizeSpell(spell.name)}}>Memorize Spell</button>
            <button className="button" disabled={!findSpell(spell.name)} onClick={(e) => {e.preventDefault(); unmemorizeSpell(spell.name)}}>Unmemorize Spell</button>
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
