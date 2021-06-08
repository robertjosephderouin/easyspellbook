  
export const getSpells = () => {
    return fetch('https://www.dnd5eapi.co/api/spells')
      .then(response => response.json())
  }

  export const getSpotlight = (url) => {
    return fetch(`https://www.dnd5eapi.co/api/spells/${url}`)
      .then(response => response.json())
  }