const Review = require("../models/review");
const User = require("../models/user");
const { arrayToObject } = require("../utils");

// get user id from session
const user_id = req => req.session.passport.user;

const allReviews = async (req, res) => {
  const reviews = await Review.find({}).then(review => {
    const res = arrayToObject(review, "_id");
    return res;
  });
  res.json(reviews);
};

const reviewById = async (req, res) => {
  const review = await Review.findById({ _id: req.params.id }).then(
    review => review
  );
  res.json(review);
};

const newReview = async (req, res) => {};

const editReview = async (req, res) => {};

module.exports = {
  allReviews,
  reviewById,
  newReview,
  editReview
};
