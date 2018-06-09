const express = require("express");
const mongoose = require("mongoose");
const passportSetup = require("./services/passport");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("../key");

const app = express();

// connect to mongodb
const db = keys.mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("mongo connected...fireworks!"))
  .catch(err => console.log("oh no! no fireworks....", err));

app.use(
  cookieSession({
    // 1 day
    // maxAge: 24 * 60 * 60 * 1000,
    // debuggin 3 mins
    maxAge: 3 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
