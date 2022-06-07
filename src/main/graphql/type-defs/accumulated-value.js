import { gql } from 'apollo-server-micro'

export default gql`
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
