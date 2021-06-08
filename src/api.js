  
export const getSpells = () => {
    return fetch('https://www.dnd5eapi.co/api/spells')
      .then(response => response.json())
  }