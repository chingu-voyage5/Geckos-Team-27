const Home = require("../models/home");

// get user id from session
const user_id = req => req.session.passport.user;

const newHome = async (req, res) => {};

const homeById = async (req, res) => {};

const editHome = async (req, res) => {};

const allHomes = async (req, res) => {};

module.exports = {
  newHome,
  homeById,
  editHome,
  allHomes
};
