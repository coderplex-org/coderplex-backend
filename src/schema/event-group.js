import { gql } from 'apollo-server-express'

export default gql`
  type EventGroup {
    id: ID!

    name: String!
    description: String!
    logo: String
    motto: String
  }
`
