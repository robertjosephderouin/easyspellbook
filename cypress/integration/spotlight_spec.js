describe('Spotlight', () => {
  
    beforeEach(() => {
        const baseURL = 'https://www.dnd5eapi.co/api/spells';
        const acidURL = 'http://localhost:3000/acid-arrow';
        const aidURL = 'http://localhost:3000/aid';
      cy.intercept('GET', `${baseURL}`, {
        results: [
                {
                    "index": "acid-arrow",
                    "name": "Acid Arrow",
                    "url": "/api/spells/acid-arrow"
                },
                {
                    "index": "aid",
                    "name": "Aid",
                    "url": "/api/spells/aid"
                }
            ]
        })
      cy.intercept('GET', `${acidURL}`, {
        results: {
        "index": "acid-arrow",
        "name": "Acid Arrow",
        "desc": [
            "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
        ],
        "higher_level": [
            "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
        ],
        "range": "90 feet",
        "components": [
            "V",
            "S",
            "M"
        ],
        "material": "Powdered rhubarb leaf and an adder's stomach.",
        "ritual": false,
        "duration": "Instantaneous",
        "concentration": false,
        "casting_time": "1 action",
        "level": 2,
        "attack_type": "ranged",
        "damage": {
            "damage_type": {
                "index": "acid",
                "name": "Acid",
                "url": "/api/damage-types/acid"
            },
            "damage_at_slot_level": {
                "2": "4d4",
                "3": "5d4",
                "4": "6d4",
                "5": "7d4",
                "6": "8d4",
                "7": "9d4",
                "8": "10d4",
                "9": "11d4"
            }
        },
        "school": {
            "index": "evocation",
            "name": "Evocation",
            "url": "/api/magic-schools/evocation"
        },
        "classes": [
            {
                "index": "wizard",
                "name": "Wizard",
                "url": "/api/classes/wizard"
            }
        ],
        "subclasses": [
            {
                "index": "lore",
                "name": "Lore",
                "url": "/api/subclasses/lore"
            },
            {
                "index": "land",
                "name": "Land",
                "url": "/api/subclasses/land"
            }
        ],
        "url": "/api/spells/acid-arrow"
        }})
        cy.intercept('GET', `${aidURL}`, {
            results: {
                "index": "aid",
                "name": "Aid",
                "desc": [
                    "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration."
                ],
                "higher_level": [
                    "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd."
                ],
                "range": "30 feet",
                "components": [
                    "V",
                    "S",
                    "M"
                ],
                "material": "A tiny strip of white cloth.",
                "ritual": false,
                "duration": "8 hours",
                "concentration": false,
                "casting_time": "1 action",
                "level": 2,
                "heal_at_slot_level": {
                    "2": "5",
                    "3": "10",
                    "4": "15",
                    "5": "20",
                    "6": "25",
                    "7": "30",
                    "8": "35",
                    "9": "40"
                },
                "school": {
                    "index": "abjuration",
                    "name": "Abjuration",
                    "url": "/api/magic-schools/abjuration"
                },
                "classes": [
                    {
                        "index": "cleric",
                        "name": "Cleric",
                        "url": "/api/classes/cleric"
                    },
                    {
                        "index": "paladin",
                        "name": "Paladin",
                        "url": "/api/classes/paladin"
                    }
                ],
                "subclasses": [
                    {
                        "index": "lore",
                        "name": "Lore",
                        "url": "/api/subclasses/lore"
                    }
                ],
                "url": "/api/spells/aid"
            }})
    });

    it('a spell should be able to be clicked then display a spotlighted version of that spell', () => {
  
      cy.visit('http://localhost:3000/')
        cy.get('a[href*="acid-arrow"]').click()
          .wait(1000)
          .get('h2').contains('Acid Arrow')
    });

    it('a different spell should be able to be clicked then display a spotlighted version of that spell', () => {
  
        cy.visit('http://localhost:3000/')
          cy.get('a[href*="aid"]').click()
            .wait(1000)
            .get('h2').contains('Aid')
      });
  
    it('on spot light page clicking the back button returns you to the main page', () => {
  
      cy.visit('http://localhost:3000/')
        cy.get('a[href*="acid-arrow"]').click()
          .wait(1000)
          .get('.button').click()
          .get('article').contains('Acid Arrow')
    });
  
});