describe('Dashboard', () => {

    it('it should display the data provided as spell cards', () => {
      const baseURL = 'https://www.dnd5eapi.co/api/spells';
      cy.intercept('GET', `${baseURL}`, {
        results: [
            {
                "index": "acid-arrow",
                "name": "Acid Arrow",
                "url": "/api/spells/acid-arrow"
            },
            {
                "index": "acid-splash",
                "name": "Acid Splash",
                "url": "/api/spells/acid-splash"
            },
            {
                "index": "aid",
                "name": "Aid",
                "url": "/api/spells/aid"
            },
            {
                "index": "alarm",
                "name": "Alarm",
                "url": "/api/spells/alarm"
            },
      ]
      })
      cy.visit('http://localhost:3000/')
        .get('article').contains('Acid Arrow')
  
    });

    it('it should display different data provided as spell cards', () => {
        const baseURL = 'https://www.dnd5eapi.co/api/spells';
        cy.intercept('GET', `${baseURL}`, {
          results: [
              {
                  "index": "acid-arrow",
                  "name": "Acid Arrow",
                  "url": "/api/spells/acid-arrow"
              },
              {
                  "index": "acid-splash",
                  "name": "Acid Splash",
                  "url": "/api/spells/acid-splash"
              },
              {
                  "index": "aid",
                  "name": "Aid",
                  "url": "/api/spells/aid"
              },
              {
                  "index": "alarm",
                  "name": "Alarm",
                  "url": "/api/spells/alarm"
              },
        ]
        })
        cy.visit('http://localhost:3000/')
          .get('article').contains('Aid')
    
      });

      it('it should display the memorize count as one higher when you click memorize spell', () => {
        const baseURL = 'https://www.dnd5eapi.co/api/spells';
        cy.intercept('GET', `${baseURL}`, {
          results: [
              {
                  "index": "acid-arrow",
                  "name": "Acid Arrow",
                  "url": "/api/spells/acid-arrow"
              },
              {
                  "index": "acid-splash",
                  "name": "Acid Splash",
                  "url": "/api/spells/acid-splash"
              },
              {
                  "index": "aid",
                  "name": "Aid",
                  "url": "/api/spells/aid"
              },
              {
                  "index": "alarm",
                  "name": "Alarm",
                  "url": "/api/spells/alarm"
              },
        ]
        })
        cy.visit('http://localhost:3000/')
          .get('button').contains('Memorize Spell').click()
          .get('p').contains('Memorized : 1')
    
      });
  
    it('it should display Loading if no spells have yet been retrieved', () => {
      cy.visit('http://localhost:3000/')
        .get('h2').contains('Loading')
    });
  
    it('it should display an error of something went wrong when something goes wrong with the host', () => {
      const baseURL = 'https://www.dnd5eapi.co/api/spells';
      cy.intercept('GET', `${baseURL}`, {})
        .visit('http://localhost:3000/')
        .get('h3').contains('Something went wrong')
    });
  
  });