const mongoose = require("mongoose");

const referenceSchema = new mongoose.Schema({
  hostId: {
    // user being referenced
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  referencerId: {
    // the user who made the reference
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  referenceDate: Number,
  stars: Number, // Out of 5 stars
  content: String,
  firstName: String,
  lastName: String,
  location: {
    city: String,
    state: String
  }
});

const Reference = mongoose.model("references", referenceSchema);

module.exports = Reference;
