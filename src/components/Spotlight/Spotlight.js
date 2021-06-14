import './Spotlight.css';

import React, { Component } from 'react';

import {
  Link,
  Redirect,
} from 'react-router-dom';

import PropTypes from 'prop-types';

import { getSpotlight } from '../../api';

class Spotlight extends Component {
  constructor({index}) {
    super();
    this.state = {
      index: index,
      spotLight: null,
      error: '',
      isLoaded: false,
    }
  }

  componentDidMount = () => {
    getSpotlight(this.state.index)
      .then(data => {
        this.setState({ spotLight: data })
      })
      .catch(() => {
        this.setState({ error: 'Something went wrong'})
      })
      .finally(() => {
        this.setState({ isLoaded: true })
      })
  }

  render() {
    return (
      <div>
      {!this.state.isLoaded && <h2>Loading spell selection...</h2>}
      {!this.state.error && this.state.isLoaded && !this.state.spotLight && <Redirect to='/' />}
      {this.state.error && <h3>{this.state.error}</h3>}
        <article className="details" key={this.state.spotLight?.url}>
          <h2>{this.state.spotLight?.name}</h2>
          <p>{this.state.spotLight?.desc}</p>
          <p>{this.state.spotLight?.higher_level}</p>
          <p>Range: {this.state.spotLight?.range}</p>
          <p>Material: {this.state.spotLight?.material}</p>
          <p>Duration: {this.state.spotLight?.duration}</p>
          <p>Casting Time: {this.state.spotLight?.casting_time}</p>
          <p>Level: {this.state.spotLight?.level}</p>
          <p>School: {this.state.spotLight?.school.name}</p>
          <Link className="button" style={{ textDecoration: 'none'}} to={'/'}>Back</Link>
        </article>
      </div>
    );
  }
}

Spotlight.propTypes = {
  index: PropTypes.string
}

export default Spotlight;
