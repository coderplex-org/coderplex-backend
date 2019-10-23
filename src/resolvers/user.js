import jwt from 'jsonwebtoken'
import { combineResolvers } from 'graphql-resolvers'
import { AuthenticationError, UserInputError } from 'apollo-server'

import { isSelfDeleteAuth, isAuthenticated } from './authorization'

const createToken = async (user, secret, expiresIn) => {
  const { id, email } = user
  return await jwt.sign({ id, email }, secret, {
    expiresIn
  })
}

export default {
  Query: {
    allUsers: async (parent, args, { models }) => {
      const allUsers = await models.User.findAll()
      return allUsers
    },
    userById: async (parent, { id }, { models }) => {
      return await models.User.findByPk(id)
    },
    userByEmail: async (parent, { email }, { models }) => {
      return await models.User.findOne({
        where: {
          email
        }
      })
    },
    currentUser: async (parent, args, { models, loggedInUser }) => {
      if (!loggedInUser) {
        return null;
      }

      return await models.User.findByPk(loggedInUser.id);
    }
  },

  Mutation: {
    signUp: async (parent, { email, password }, { models, secret }) => {
      const user = await models.User.create({
        email,
        password
      });

      return { token: createToken(user, secret, "30m") };
    },

    signIn: async (parent, { login, password }, { models, secret }) => {
      const user = await models.User.findByLogin(login);

      if (!user) {
        throw new UserInputError("No user found with this login credentials.");
      }

      const isValid = await user.validatePassword(password);

      if (!isValid) {
        throw new AuthenticationError("Invalid password.");
      }

      return { token: createToken(user, secret, "30m") };
    },

    updateUser: combineResolvers(
      isAuthenticated,
      async (parent, args, { models, loggedInUser }) => {
        const user = await models.User.findByPk(loggedInUser.id);
        return await user.update({ ...args });
      }
    ),

    deleteUser: combineResolvers(
      isSelfDeleteAuth,
      async (parent, { id }, { models }) => {
        return await models.User.destroy({
          where: { id }
        });
      }
    )
  },

  User: {
    socialProfile: async (user, args, { models }) => {
      return await models.SocialProfile.findOne({
        where: {
          userId: user.id
        }
      });
    },
    eventProfile: async (user, args, { models }) => {
      return await models.EventProfile.findOne({
        where: {
          userId: user.id
        }
      });
    }
  }
};
