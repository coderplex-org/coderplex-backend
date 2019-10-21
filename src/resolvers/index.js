import { DateTimeResolver, URLResolver } from 'graphql-scalars'

import userResolvers from './user'

const customScalarResolver = {
  DateTime: DateTimeResolver,
  URL: URLResolver
}

export default [
  customScalarResolver,
  userResolvers
]
