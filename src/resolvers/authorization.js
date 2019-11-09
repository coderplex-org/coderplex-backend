import { ForbiddenError } from 'apollo-server';
import { combineResolvers, skip } from 'graphql-resolvers';

export const isAuthenticated = (parent, args, { loggedInUser }) =>
  loggedInUser ? skip : new ForbiddenError('Not authenticated as user.');

export const isSelfDeleteAuth = combineResolvers(
  isAuthenticated,
  (parent, { id }, { loggedInUser }) =>
    id === loggedInUser.id
      ? skip
      : new ForbiddenError('Not authorized as admin.'),
)
