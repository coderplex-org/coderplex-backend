import { gql } from 'apollo-server-express'

/*
User - Base user model used in profiles feature

Extends each new profile for each feature.

- Make necessary changes in the models whenever new fields are added.
- Add new queries under Query and update the query with function in resolvers.
- Whenever a new extension added please add it as field under User,
  also add resolvers to each of it.
- Add necessary mutations if needed and handle the mutations in resolvers.
*/

export default gql`
  extend type Query {
    allUsers: [User]!
    userById(id: ID!): User
    userByEmail(email: String!): User
    currentUser: User
  }

  extend type Mutation {
    updateUser(
      email: String,
      contact_no: String,
      name: String,
      profile_pic: URL
    ): User!

    deleteUser(id: ID!): Boolean!
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!

    name: String!
    email: String!
    contactNo: String
    profilePic: URL!

    socialProfile: SocialProfile
    eventProfile: EventProfile
  }
`
// Extend with new profiles for each feature above
