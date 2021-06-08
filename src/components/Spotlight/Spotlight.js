import React, {Component} from 'react';
import './Spotlight.css';
import { getSpotlight } from '../../api';
import { Link, Redirect } from 'react-router-dom';

class Spotlight extends Component {
  constructor({url}) {
    super();
    this.state = {
      url: url,
      spotLight: null,
      error: '',
      isLoaded: false,
    }
  }

  componentDidMount = () => {
    getSpotlight(this.state.url)
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
        <article key={this.state.spotLight?.url}>
          <h2>{this.state.spotLight?.name}</h2>
          <p>{this.state.spotLight?.desc}</p>
          <Link to={'/'}>🔙</Link>
        </article>
      </div>
    );
  }
}


export default Spotlight;
