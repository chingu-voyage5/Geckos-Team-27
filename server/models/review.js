const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  madeBy: Object, // id of the user that made the review, object because the _id property in mongodb is of type object
  houseId: Object, //id of the house
  host: Object, // id of the host
  rating: Number //out of 5
});

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
