import { combineResolvers } from 'graphql-resolvers'

import { isSelfDeleteAuth, isAuthenticated } from './authorization'

/*
User - Base user model used in profiles feature

Extends each new profile for each feature.

- Add new queries under Query
- Whenever a new extension added please add it as field under User
- Add necessary mutations if needed.
*/

export default {
  Query: {
    allUsers: async (parent, args, { models }) => {
      const allUsers = await models.User.findAll()
      return allUsers
    },
    userById: async (parent, { id }, { models }) => {
      const user = await models.User.findByPk(id)
      return user
    },
    userByEmail: async (parent, { email }, { models }) => {
      const user = await models.User.findOne({
        where: {
          email
        }
      })
      return user
    },
    currentUser: async (parent, args, { models, loggedInUser }) => {
      if (!loggedInUser) {
        return null
      }

      const currentUser = await models.User.findByPk(loggedInUser.id)
      return currentUser
    }
  },

  Mutation: {
    updateUser: combineResolvers(
      isAuthenticated,
      async (parent, args, { models, loggedInUser }) => {
        const user = await models.User.findByPk(loggedInUser.id)
        const updatedUser = await user.update({ ...args })
        return updatedUser
      }
    ),

    deleteUser: combineResolvers(
      isSelfDeleteAuth,
      async (parent, { id }, { models }) => {
        const isDestroyed = await models.User.destroy({
          where: { id }
        })
        return isDestroyed
      }
    )
  },

  User: {
    socialProfile: async (user, args, { models }) => {
      const socialProfile = await models.SocialProfile.findOne({
        where: {
          userId: user.id
        }
      })
      return socialProfile
    },
    eventProfile: async (user, args, { models }) => {
      const eventProfile = await models.EventProfile.findOne({
        where: {
          userId: user.id
        }
      })
      return eventProfile
    }
  }
}
