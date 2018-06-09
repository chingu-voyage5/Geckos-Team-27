const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  gender: String,
  joindate: String,
  phoneNumber: Number
});

const User = mongoose.model("users", userSchema);

module.exports = User;
