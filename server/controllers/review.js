const Review = require("../models/review");
const User = require("../models/user");
const { arrayToObject } = require("../utils");

// get user id from session
const user_id = req => req.session.passport.user;

const allReviews = async (req, res) => {};

const reviewById = async (req, res) => {};

const newReview = async (req, res) => {};

const editReview = async (req, res) => {};

module.exports = {
  allReviews,
  reviewById,
  newReview,
  editReview
};
