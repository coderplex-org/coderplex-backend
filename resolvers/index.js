const User = require('../models/User')

const updateHits = require('../utils/updateHits')

const resolvers = {
  Query: {
    getUserById: async (_, { userId }) => {
      try {
        const user = await User.findOne({ _id: userId }).exec()
        if (!user) {
          throw new Error(`User with userId ${userId} not found!`)
        }

        return updateHits(user)
      } catch (e) {
        throw e
      }
    },
    getUserByUsername: async (_, { username }) => {
      try {
        const user = await User.findOne({ username }).exec()
        if (!user) {
          throw new Error(`User with username ${username} not found!`)
        }

        return updateHits(user)
      } catch (e) {
        throw e
      }
    }
  },
  Mutation: {
    addUser: async (_, { user }) => {
      try {
        const { username } = user
        const userExists = await User.countDocuments({ username }).exec()
        if (userExists) {
          throw new Error(`A user with the username ${username} already exists`)
        }

        const newUser = new User(user)
        const isInvalid = await newUser.validate()

        if (isInvalid) {
          throw isInvalid
        }

        return newUser.save()
      } catch (e) {
        throw e
      }
    }
  }
}

module.exports = resolvers
