const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 4000;

// connect to mongodb
const db = require("../key").mongoURI;
mongoose
  .connect(db)
  .then(() =>
    console
      .log("mongo connected...fireworks!")
      .catch(err => console.log("oh no! no fireworks....", err))
  );

app.get("/", (req, res) => res.send(`Let's get started`));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
