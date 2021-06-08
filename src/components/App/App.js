import React, { Component } from 'react';
import Spells from '../Spells/Spells';
import Spotlight from '../Spotlight/Spotlight';
import './App.css';
import { getSpells } from '../../api';
import Spellbook from '../Spellbook/Spellbook';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      spells: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getSpells()
      .then(data => {
        this.setState({ spells: data.results })
      })
      .catch(() => this.setState({ error: 'Something went wrong'}))
  }

  render() {
    return (
      <main>
        {!this.state.spells.length && !this.state.error && <h2>Loading spells...</h2>}
        {this.state.error && <h3>{this.state.error}</h3>}
        <Switch>
        <Route exact path="/" render={() => {
          return (
            <section>
              <Spellbook />
              <Spells spells={this.state.spells} />
            </section>
          )
        }} />

        <Route exact path="/:url" render={({match}) => {
          const { url } = match.params;
          return <Spotlight index={url} />
        }} />
        </Switch>
      </main>
    )
  }
}

export default App;
