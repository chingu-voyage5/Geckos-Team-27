const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: String,
  birthmonth: String,
  birthday: String,
  birthyear: String,
  gender: String,
  joindate: String,
  phoneNumber: Number
});

const User = mongoose.model("users", userSchema);

module.exports = User;
