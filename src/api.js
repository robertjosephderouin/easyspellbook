  
export const getSpells = () => {
    return fetch('https://www.dnd5eapi.co/api/spells')
      .then(response => response.json())
  }

  export const getSpotlight = (index) => {
    return fetch(`https://www.dnd5eapi.co/api/spells/${index}`)
      .then(response => response.json())
  }