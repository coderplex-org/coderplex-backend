import { gql } from 'apollo-server-express'

export default gql`
  type EventGroupMemberRoleChoice {
    id: ID!
    role: String!
  }
`
