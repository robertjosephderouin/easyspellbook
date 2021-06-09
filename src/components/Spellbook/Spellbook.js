import React from 'react';
import './Spellbook.css';
import { Link } from 'react-router-dom';

const Spellbook = () => {
  return(
    <nav>
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/'}>Easy Spell Book</Link>
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={'/memorizedSpells'}>Memorized Spells</Link>
    </nav>
  )
}

export default Spellbook;