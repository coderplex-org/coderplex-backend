import { gql } from 'apollo-server-express'

export default gql`
  type EventGroupMemberRoles {
    id: ID!

    profile: EventProfile!
    group: EventGroup!
    roles: [EventGroupMemberRoleChoice!]!
  }
`
