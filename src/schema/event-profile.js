import { gql } from 'apollo-server-express'

export default gql`
  type EventProfile {
    id: ID!

    interests: [InterestTagChoice]!
  }
`

// extend type Query {
//   messages(cursor: String, limit: Int): MessageConnection!
//   message(id: ID!): Message!
// }

// extend type Mutation {
//   createMessage(text: String!): Message!
//   deleteMessage(id: ID!): Boolean!
// }

// type MessageConnection {
//   edges: [Message!]!
//   pageInfo: PageInfo!
// }

// type PageInfo {
//   hasNextPage: Boolean!
//   endCursor: String!
// }
// extend type Subscription {
//   messageCreated: MessageCreated!
// }

// type MessageCreated {
//   message: Message!
// }
