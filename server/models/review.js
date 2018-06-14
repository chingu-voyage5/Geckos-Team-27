const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  houseId: {
    // id of the house being reviewed
    type: Schema.Types.ObjectId,
    ref: "homes"
  },
  hostId: {
    // id of home owner
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  reviewerId: {
    // the user who made the review
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  reviewdate: Number,
  rating: Number, //out of 5
  content: String,
  firstName: String,
  lastName: String,
  location: {
    city: String,
    state: String,
    country: String
  }
});

const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;
