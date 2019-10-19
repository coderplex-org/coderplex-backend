import { gql } from 'apollo-server-express'

export default gql`
  type EventTicket {
    id: ID!

    attendeeName: String!
    attendeePhone: String!
    attendeeEmail: String!

    forParticipation: EventParticipation!
    ticketType: EventTicketTypeChoice!
  }
`
