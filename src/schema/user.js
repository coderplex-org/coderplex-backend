import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    allUsers: [User!]
    user(id: ID!): User
    currentUser: User
  }

  extend type Mutation {
    signUp(
      username: String!
      email: String!
      password: String!
    ): Token!

    signIn(login: String!, password: String!): Token!

    updateUser(
      email: String!,
      contact_no: String!,
      first_name: String!,
      last_name: String!,
      profile_pic: URL!
    ): User!

    deleteUser(id: ID!): Boolean!
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!

    firstName: String!
    lastName: String!
    email: String!
    contactNo: String
    profilePic: URL!

    socialProfile: SocialProfile
    eventProfile: EventProfile
  }
`
