import { gql } from 'apollo-server-express'

export default gql`
  type SubEvent {
    id: ID!

    numberInSeries: Int!

    partOfEvent: Event!
    details: EventDetails!
    ticketAvailability: EventTicketsAvailability!
  }
`
