const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("../../key");
const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/redirect",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already exists or create new user
    }
  )
);
