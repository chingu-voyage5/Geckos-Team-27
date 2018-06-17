const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
  city: String,
  state: String,
  zipcode: String,
  country: String,
  school: String,
  work: String,
  languages: String,
  verified: {
    id: Boolean,
    info: Boolean,
    email: Boolean,
    phone: Boolean,
    workemail: Boolean
  },
  superuser: Boolean,
  intro: String,
  image: String,
  admin: Boolean,
  homes: [
    {
      type: Schema.Types.ObjectId,
      ref: "homes"
    }
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "reviews"
    }
  ],
  references: [
    {
      type: Schema.Types.ObjectId,
      ref: "references"
    }
  ]
});

const User = mongoose.model("users", userSchema);

module.exports = User;
