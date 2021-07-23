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
            spells {
              index
              name
              url
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
        variables: { spell },
        query: gql`
         query Query($spell: String!) {
            spells(filter: { index: $spell }) {
              name
              desc
              higher_level
              range
              material
              duration
              casting_time
              level
              school{name}
            }
          }
        `
      })
    return spellData.data.spells[0];
  }
}

export default new APIService();