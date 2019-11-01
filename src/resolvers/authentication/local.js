import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { User } from '../../models'

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, done) => {
      console.log({email, password})
      User.findOne({ where: { email } }, (err, user) => {
        if (err) {
          return done(err)
        }
        if (!user) {
          return done(null, false, { message: "We couldn't find any profile associated with that email." })
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: "Incorrect password." })
        }
        return done(null, user)
      })
    }
  )
)

const signUpUserLocal = (req, res) => {
  const {
    body: {
      email,
      firstName,
      lastName,
      password
    },
    params: {
      strategy
    }
  } = req
  User.findOrCreate({
    where: {
      email
    },
    defaults: {
      firstName,
      lastName,
      password
    }
  })
  res.redirect(`/auth/${strategy}`)
}

export default signUpUserLocal