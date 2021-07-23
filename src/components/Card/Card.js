import './Card.css';

import React from 'react';

import PropTypes from 'prop-types';

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

