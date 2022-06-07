import { gql, ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import { getAccumulatedValueQuery } from './resolvers'

const typeDefs = gql`
  type WithPercent {
    value: String!
    percent: Float!
  }

  type AccumulatedValue {
    futureValue: String!
    saved: String!
    compoundInterest: String!
    interest: WithPercent!
    initialInvestment: WithPercent!
    monthlyAccumulated: WithPercent!
    total: String!
  }

  type Query {
    getAccumulatedValue(initialInvestment: Float!, installmentValue: Float!, time: Int!, interestRate: Float!): AccumulatedValue
  }
`

const resolvers = {
  Query: {
    ...getAccumulatedValueQuery
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

const startServer = apolloServer.start()

export default async function handler (req, res) {
  await startServer
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

export const config = {
  api: {
    bodyParser: false
  }
}
