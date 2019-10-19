// const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportJWT = require('passport-jwt')

const User = require('../models').User

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  passReqToCallback: true
}

const strategy = new JwtStrategy(jwtOptions, (req, jwtPayload, done) => {
  return User.findOne({ where: { id: jwtPayload.id } })
    .then(user => {
      req.currentUser = user
      done(null, user)
    })
    .catch(error => done(error, false))
})

passport.use(strategy)
