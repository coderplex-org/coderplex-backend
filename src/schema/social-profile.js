import { gql } from 'apollo-server-express'

export default gql`
  type SocialProfile {
    id: ID!

    facebook: String!
    twitter: String!

    user: User!
  }
`
