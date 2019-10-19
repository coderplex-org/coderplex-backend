import { gql } from 'apollo-server-express'

export default gql`
  type PaymentDetails {
    id: ID!

    amountPaid: Int!

    currency: PaymentCurrencyChoice!
  }
`
