class StorageService {
  storedSpells = []
  constructor() {
    const spellStorage = localStorage.getItem('spells')
    if (spellStorage) {
      this.storedSpells = JSON.parse(spellStorage)
    }
  }

  save() {
    localStorage.setItem('spells', JSON.stringify(this.storedSpells))
  }

  add(spell) {
    this.storedSpells.push(spell)
    this.save()
  }

  remove(spellName) {
    const storedSpellIndex = this.storedSpells.findIndex(storedSpell => storedSpell.name === spellName)
    this.storedSpells.splice(storedSpellIndex, 1)
    this.save()
  }

  load() {
    return this.storedSpells
  }
}

export default new StorageService();