import './App.css';

import React, { Component } from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import { getSpells } from '../../api';
import Spellbook from '../Spellbook/Spellbook';
import Spells from '../Spells/Spells';
import Spotlight from '../Spotlight/Spotlight';

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


  findSpell = (name) => {
    const names = this.state.memorizedSpells.map(spell => spell.name)
    return names.includes(name)
  }

  memorizeSpell = (name) => {
    const spell = this.state.spells.find(spell => spell.name === name)
    this.setState({ memorizedSpells: [...this.state.memorizedSpells, spell]})
  }

  unmemorizeSpell = (name) => {
    const spells = [...this.state.memorizedSpells]
    spells.splice(spells.findIndex(spell => spell.name === name), 1);
    this.setState({ memorizedSpells: spells})
  }

  countSpell = (name) => {
    return this.state.memorizedSpells.filter(spell => spell.name === name).length
  }

  render() {
    return (
      <main className="container">
        {!this.state.spells.length && !this.state.error && <h2>Loading spells...</h2>}
        {this.state.error && <h3>{this.state.error}</h3>}
        <Switch>
        <Route exact path="/" render={() => {
          return (
            <section>
              <Spellbook />
              <Spells findSpell={this.findSpell} memorizeSpell={this.memorizeSpell} unmemorizeSpell={this.unmemorizeSpell} countSpell={this.countSpell} spells={this.state.spells} />
            </section>
          )
        }} />
        <Route exact path="/memorizedSpells" render={() => {
          return (
            <section>
              <Spellbook />
              <Spells findSpell={this.findSpell} memorizeSpell={this.memorizeSpell} unmemorizeSpell={this.unmemorizeSpell} countSpell={this.countSpell} spells={this.state.memorizedSpells} />
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
