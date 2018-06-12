const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passportSetup = require("./services/passport");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("../key");
const authRoutes = require("./routes/auth");

const app = express();
// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to mongodb
const db = keys.mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("mongo connected...fireworks!"))
  .catch(err => console.log("oh no! no fireworks....", err));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// set up routes
app.use(authRoutes);

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
