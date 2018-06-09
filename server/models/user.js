const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  joindate: String,
  phoneNumber: Number
});

const User = mongoose.model("user", userSchema);

module.exports = User;
