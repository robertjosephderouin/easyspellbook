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
      memorizedSpells: [],
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

  memorizeSpell = (name) => {
    const spell = this.state.spells.find(spell => spell.name === name);
    this.setState({ memorizedSpells: [...this.state.memorizedSpells, spell]})
  }

  unmemorizeSpell = (name) => {
    const spell = this.state.spells.find(spell => spell.name === name);
    this.setState({ memorizedSpells: this.state.memorizedSpells.filter(spell => spell.name != name)})
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
              <Spells memorizeSpell={this.memorizeSpell} spells={this.state.spells} />
            </section>
          )
        }} />
        <Route exact path="/memorizedSpells" render={() => {
          return (
            <section>
              <Spellbook />
              <Spells memorizeSpell={this.memorizeSpell} spells={this.state.memorizedSpells} />
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
