import passport from 'passport'

import signUpUserLocal from './local'

const signUp = {
  local: signUpUserLocal
}

export default (app) => {
  app.get(
    '/auth/:strategy',
    (req, res) => signUp[req.params.strategy](req, res)
  )

  app.post(
    '/auth/:strategy/callback',
    (req, res) => passport.authenticate(
      req.params.strategy
    )(req, res)
  )
}