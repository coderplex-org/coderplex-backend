import { gql } from 'apollo-server-express'

module.exports = gql`
  type UserOutput {
    username: String!
    email: String!
    mobile: Int
    bio: String
    working: Boolean
    forehire: Boolean
    links: UserLinksOutput
    techFamiliarWith: [String]
    techInterestedIn: [String]
    projects: [UserProjectOutput]
    hits: Int
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
    mobile: Int
    bio: String
    working: Boolean
    forehire: Boolean
    links: UserLinksInput
    techFamiliarWith: [String]
    techInterestedIn: [String]
    projects: [UserProjectInput]
  }

  type UserProjectOutput {
    name: String
    desc: String
    thumbnailUrl: String
    creators: [String]
    link: String
    hits: Int
  }

  input UserProjectInput {
    name: String
    desc: String
    thumbnailUrl: String
    creators: [String]
    link: String
    hits: Int
  }

  type UserLinksOutput {
    facebook: String
    twitter: String
    linkedin: String
    angellist: String
    stackoverflow: String
    codepen: String
    github: String
    behance: String
    discord: String
  }

  input UserLinksInput {
    facebook: String
    twitter: String
    linkedin: String
    angellist: String
    stackoverflow: String
    codepen: String
    github: String
    behance: String
    discord: String
  }

  type Query {
    ping: String!
    getUserById(userId: ID!): UserOutput
    getUserByUsername(username: String!): UserOutput
  }

  type Mutation {
    addUser(
      user: UserInput!
    ): UserOutput
  }
`
