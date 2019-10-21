import { gql } from 'apollo-server-express'

export default gql`
  type EventParticipation {
    id: ID!

    profile: EventProfile!
    payment: PaymentDetails!
    participationStatus: EventParticipationStatusChoice!
  }
`
