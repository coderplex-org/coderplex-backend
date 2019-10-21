import { gql } from 'apollo-server-express'

export default gql`
  type EventLocationDetails {
    id: ID!

    name: String!
    mapsUrl: String!
  }
`
