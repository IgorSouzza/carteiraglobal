import { gql } from 'apollo-server-micro'

export default gql`
  type Invested {
    name: String!
    color: String!
    data: [Float!]
  }

  type Accumulated {
    name: String!
    color: String!
    data: [Float!]
  }

  type FinancialProjection {
    invested: Invested
    accumulated: Accumulated
  }

  type Query {
    getFinancialProjection(initialInvestment: Float!, installmentValue: Float!, time: Int!, interestRate: Float!): FinancialProjection
  }
`
