import {
  ApolloClient,
  gql,
  InMemoryCache,
} from '@apollo/client';

class APIService {
  constructor() {
    this.client = new ApolloClient({
      uri: 'https://www.dnd5eapi.co/graphql',
      cache: new InMemoryCache()
    });
  }

  async getSpells() {
    const spellData = await this.client
      .query({
        query: gql`
          query Query {
            spells(limit: 1000) {
              index
              name
              level
              classes{name}
            }
          }
        `
      })
    return spellData.data.spells;
  }

  async getSpotlight(spell) {
    const spellData = await this.client
      .query({
        variables: { spell: spell},
        query: gql`
         query Query($spell: String!) {
            spells(name:$spell) {
              name
              desc
              higher_level
              range
              material
              duration
              casting_time
              level
              school{name}
              classes{name}
            }
          }
        `
      })
    return spellData.data.spells[0];
  }
}

export default new APIService();