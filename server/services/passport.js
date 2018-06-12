const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("../../key");
const User = require("../models/user");
const { formatDate } = require("../utils");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    (username, password, done) => {
      User.findOne({ email: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            email: "Email not found."
          });
        }
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            // success
            return done(null, user);
          } else {
            return done(null, false, {
              password: "Password is incorrect"
            });
          }
        });
      });
    }
  )
);

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
  User.findOne({ email: profile.emails[0].value }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      // create user
      const joindate = formatDate(new Date());
      const newUser = new User({
        googleId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        gender: profile.gender,
        phoneNumber: "",
        date: joindate
      });
      newUser.save((err, newUser) => {
        if (err) return done(err);
        return done(null, newUser);
      });
    } else {
      // returns existing user
      return done(null, user);
    }
  });
};
