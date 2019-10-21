import { gql } from 'apollo-server-express'

export default gql`
  type EventDetails {
    id: ID!

    name: String!
    description: String!
    slug: String!
    poster: String

    isPublished: EventPublishedChoice!
    location: EventLocationDetails!
    fromDateTime: DateTime!
    toDateTime: DateTime!
  }
`
