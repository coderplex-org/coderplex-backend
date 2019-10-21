import { gql } from 'apollo-server-express'

export default gql`
  type Event {
    id: ID!

    isSeries: Boolean!
    numberOfEvents: Int!

    host: EventGroup!
    organisers: [EventProfile!]!
  }
`
