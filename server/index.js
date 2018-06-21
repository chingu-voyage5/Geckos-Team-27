const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const passportSetup = require("./services/passport");
const passport = require("passport");
const keys = require("../key");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const homeRoutes = require("./routes/home");
const reviewRoutes = require("./routes/review");
const referenceRoutes = require("./routes/reference");

const app = express();
// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// connect to mongodb
const db = keys.mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("mongo connected...fireworks!"))
  .catch(err => console.log("oh no! no fireworks....", err));

app.use(
  session({
    name: "geckos-bnb-cookie",
    secret: keys.session.cookieKey,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      // debug for 30 mins: later 7 days
      ttl: 30 * 60
    }),
    resave: false,
    saveUninitialized: true
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// set up routes
app.use(authRoutes);
app.use(userRoutes);
app.use(homeRoutes);
app.use(reviewRoutes);
app.use(referenceRoutes);

const port = 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
