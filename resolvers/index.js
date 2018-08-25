const User = require('../models/User')

const resolvers = {
  Query: {
    getUserById: async (_, { userId }) => {
      const user = User.findOne({ _id: userId })
      if (!user) {
        return null
      }

      return user
    },
    getUserByUsername: async (_, { username }) => {
      const user = await User.findOne({ username })
      console.log(user)
      if (!user) {
        return null
      }

      return user
    }
  },
  Mutation: {
    addUser: async (_, { user }) => {
      const newUser = new User(user)
      return newUser.save()
    }
  }
}

module.exports = resolvers
