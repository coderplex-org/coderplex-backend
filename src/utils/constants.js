const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  PRODUCTION,
  HOME_URL
} = process.env

export const ALLOW_ORIGIN = process.env.PRODUCTION
  ? `https://coderplex.com`
  : `http://localhost:3000`

export const TOKEN_EXPIRES_IN = '24h'

export const rootUrl = PRODUCTION ? HOME_URL : 'http://127.0.0.1:8000'

export const GIT_CONFIG = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: `${rootUrl}/auth/github/callback`
}

export const JWT_SECRET = process.env.JWT_SECRET
