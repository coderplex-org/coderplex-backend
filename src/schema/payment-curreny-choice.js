import { gql } from 'apollo-server-express'

export default gql`
  type PaymentCurrencyChoice {
    id: ID!

    currency: String!
  }
`
