import passport from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github'
import { User } from "../../models";

const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET
} = process.env

const GIT_CONFIG = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:8000/auth/github/callback"
}

passport.use(
  new GitHubStrategy(GIT_CONFIG, (accessToken, refreshToken, profile, cb) => {
    User.findOrCreate({ githubId: profile.id }, function(err, user) {
      return cb(err, user);
    });
  })
);
