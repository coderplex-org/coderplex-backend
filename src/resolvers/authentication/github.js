import passport from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github'

import models from '../../models'
import { GIT_CONFIG } from '../../utils/constants'

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use(
  new GitHubStrategy(
    GIT_CONFIG,
    async (accessToken, refreshToken, profile, cb) => {
      const data = profile['_json']
      if (data['type'] === 'User') {
        const [user, created] = await models.User.findOrCreate({
          where: {
            email: data.email
          },
          defaults: {
            profilePic: data.avatar_url,
            name: data.name,
            username: data.login,
            gitProfile: profile.profileUrl
          }
        })
        return cb(
          created || user
            ? null
            : new Error('There was an error during authentication.'),
          user
        )
      } else {
        throw TypeError('The Github profile must belong to a User.')
      }
    }
  )
)
