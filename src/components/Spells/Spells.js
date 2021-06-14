import './Spells.css';

import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Card from '../Card/Card';

const Spells = ({spells, findSpell, memorizeSpell, unmemorizeSpell, countSpell}) => {

  const knownIDs = [];
  const spellCards = spells.filter(spell => {
    if(!knownIDs.includes(spell.name)){
      knownIDs.push(spell.name);
      return true;
    } 
    return false;
  }).map(spell => {
    return (
      <Link className="card-container" style={{ color: 'inherit', textDecoration: 'inherit'}} to={`${spell.index}`} key={spell.index}>
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

Spells.propTypes = {
  spells: PropTypes.array,
  findSpell: PropTypes.func,
  memorizeSpell: PropTypes.func,
  unmemorizeSpell: PropTypes.func,
  countSpell: PropTypes.func,
}

export default Spells;
