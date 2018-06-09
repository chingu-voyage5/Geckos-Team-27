const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("../../key");
const User = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

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
      findOrCreateUser(profile, done);
    }
  )
);

const findOrCreateUser = (profile, done) => {
  // check if user is existing
  User.findOne({ googleId: profile.id }).then(currentUser => {
    if (currentUser) {
      done(null, currentUser);
    } else {
      // create user
      const joindate = new Date();
      new User({
        googleId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        gender: profile.gender,
        phoneNumber: ""
      })
        .save()
        .then(newUser => {
          done(null, newUser);
        });
    }
  });
};
