import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
const API_KEY = process.env.REACT_APP_THEGRAPH_API_KEY

export const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/levinswap/uniswap-v2',
    uri: `https://gateway-arbitrum.network.thegraph.com/api/${API_KEY}/subgraphs/id/2gNP6y1kTvg6aAhus8DU8DyGS1cn5TvGD3S6VjjXCZZC`,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/1hive/uniswap',
    uri: `https://gateway-arbitrum.network.thegraph.com/api/${API_KEY}/subgraphs/id/HTxWvPGcZ5oqWLYEVtWnVJDfnai2Ud1WaABiAR72JaSJ`,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/levinswap/xdai-blocks',
    uri: `https://gateway-arbitrum.network.thegraph.com/api/${API_KEY}/subgraphs/id/6TnPmZCqu53hnvxPf2T74zmy8kXu7mMi69PWBfds7vhE`,
  }),
  cache: new InMemoryCache(),
})
