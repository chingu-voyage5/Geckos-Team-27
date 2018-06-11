const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    trim: true
  },
  birthmonth: String,
  birthday: String,
  birthyear: String,
  gender: String,
  joindate: String,
  phoneNumber: Number
});

const User = mongoose.model("users", userSchema);

module.exports = User;
