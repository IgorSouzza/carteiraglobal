import { ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import typeDefs from '../graphql/type-defs'
import resolvers from '../graphql/resolvers'

export const setupApolloServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
  })
}
