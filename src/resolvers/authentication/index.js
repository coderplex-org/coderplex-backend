import passport from 'passport'

import './local'
import './github'

export default (app) => {
  app.get("/auth/:strategy", (req, res) =>
    passport.authenticate(req.params.strategy)(req, res)
  );

  app.post("/auth/:strategy/callback", (req, res) =>
    passport.authenticate(req.params.strategy)(req, res)
  );
}