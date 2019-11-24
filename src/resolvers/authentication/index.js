import passport from 'passport'
import session from 'express-session'
import jwt from 'jsonwebtoken'

import './github'
import { TOKEN_EXPIRES_IN, JWT_SECRET } from '../../utils/constants'

const generateOrRefreshToken = async (req, res) => {
  let token = req.headers['x-token'] || 'NO_TOKEN'
  let newToken = false
  const auth = req.isAuthenticated()
  if (auth) {
    try {
      const user = await jwt.verify(token, JWT_SECRET)
      if (user.id !== req.user.id) {
        throw new EvalError('Token courrpted. Please get a new one.')
      }
    } catch (e) {
      token = await jwt.sign(
        {
          id: req.user.id,
          email: req.user.email
        },
        JWT_SECRET,
        {
          expiresIn: TOKEN_EXPIRES_IN
        }
      )
      newToken = true
    }
  }
  res.send({
    auth,
    newToken,
    token
  })
}

export default app => {
  app.use(
    session({
      secret: 'session-secret',
      saveUninitialized: true,
      resave: false
    })
  )

  app.use(passport.initialize())

  app.use(passport.session())

  app.get('/auth/:strategy', (req, res, next) =>
    passport.authenticate(req.params.strategy)(req, res, next)
  )

  app.get('/auth/:strategy/callback', (req, res, next) => {
    if (req.query.success) {
      generateOrRefreshToken(req, res, next)
    } else {
      const strategy = req.params.strategy
      passport.authenticate(strategy, {
        failureRedirect: `/auth/${strategy}/callback?success=false`,
        successRedirect: `/auth/${strategy}/callback?success=true`
      })(req, res, next)
    }
  })
}
