import { gql } from 'apollo-server-express'

export default gql`
  type InterestTagChoice {
    id: ID!

    tag: String!
  }
`
