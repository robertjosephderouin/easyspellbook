import './App.css';

import React, { Component } from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import APIService from '../../api';
import StorageService from '../../storage-service';
import Spellbook from '../Spellbook/Spellbook';
import Spells from '../Spells/Spells';
import Spotlight from '../Spotlight/Spotlight';

class App extends Component {
  constructor() {
    super();
    this.state = {
      memorizedSpells: [],
      search: "",
      classFilter: "",
      levelFilter: null,
      spells: [],
      error: ''
    }
  }

  componentDidMount = () => {
    this.setState({ memorizedSpells: StorageService.load() })
    APIService.getSpells()
      .then(data => {
        this.setState({ spells: data })
      })
      .catch(() => this.setState({ error: 'Something went wrong' }))
  }


  findSpell = (name) => {
    const names = this.state.memorizedSpells.map(spell => spell.name)
    return names.includes(name)
  }

  memorizeSpell = (name) => {
    const spell = this.state.spells.find(spell => spell.name === name)
    this.setState({ memorizedSpells: [...this.state.memorizedSpells, spell] })
    StorageService.add(spell)
  }

  unmemorizeSpell = (name) => {
    const spells = [...this.state.memorizedSpells]
    spells.splice(spells.findIndex(spell => spell.name === name), 1);
    this.setState({ memorizedSpells: spells })
    StorageService.remove(name)
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
                <input onChange={event => { this.setState({ search: event.target.value }) }} className="spell-search" type="text" placeholder="Search..." />
                <select name="classes" id="classes" onChange={event => { this.setState({ classFilter: event.target.value }) }}>
                  <option value="">Clear Filter</option>
                  <option value="Bard">Bard</option>
                  <option value="Cleric">Cleric</option>
                  <option value="Druid">Druid</option>
                  <option value="Paladin">Paladin</option>
                  <option value="Ranger">Ranger</option>
                  <option value="Sorceror">Sorceror</option>
                  <option value="Warlock">Warlock</option>
                  <option value="Wizard">Wizard</option>
                </select>
                <Spellbook />
                <Spells
                  findSpell={this.findSpell}
                  memorizeSpell={this.memorizeSpell}
                  unmemorizeSpell={this.unmemorizeSpell}
                  countSpell={this.countSpell}
                  spells={this.state.spells.filter(spell => {
                    let search = this.state.search === "" || spell.name.toLowerCase().includes(this.state.search.toLowerCase())
                    if (this.state.classFilter) {
                      search = search && spell.classes.find(a => this.state.classFilter === a.name)
                    }
                    if (this.state.levelFilter) {
                      search = search && this.state.levelFilter === spell.level
                    }
                    return search
                  })} />
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
          <Route exact path="/:url" render={({ match }) => {
            const { url } = match.params;
            return <Spotlight index={url} />
          }} />
        </Switch>
      </main>
    )
  }
}

export default App;
