import { gql } from 'apollo-server-express'

export default gql`
  type EventTicketsAvailability {
    id: ID!

    totalCapacity: Int!
    availableCapacity: Int!

    opensAt: DateTime!
    closesAt: DateTime!
  }
`
