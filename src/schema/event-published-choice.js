import { gql } from 'apollo-server-express'

export default gql`
  type EventPublishedChoice {
    id: ID!

    published: Boolean!
  }
`
