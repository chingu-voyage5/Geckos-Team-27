const Home = require("../models/home");
const User = require("../models/user");

// get user id from session
const user_id = req => req.session.passport.user;

const newHome = async (req, res) => {
  const home = new Home(req.body);
  home.hostid = user_id(req);
  const newHome = await home.save();
  const user = await User.findById(home.hostid).then(user => {
    // add new home to end of array
    user.homes = [...user.homes, newHome];
    return user.save();
  });
  res.json(newHome);
};

const homeById = async (req, res) => {};

const editHome = async (req, res) => {};

const allHomes = async (req, res) => {};

module.exports = {
  newHome,
  homeById,
  editHome,
  allHomes
};
