import { gql } from 'apollo-server-express'

export default gql`
  type EventParticipationStatusChoice {
    id: ID!

    status: String!
  }
`
