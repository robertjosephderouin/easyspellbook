import './Card.css';

import PropTypes from 'prop-types';

import React from 'react';

const Card = ({ name }) => {
  return (
    <article>
      <h2>{name}</h2>
    </article>
  )
}

Card.propTypes = {
  name: PropTypes.string
}

export default Card;

