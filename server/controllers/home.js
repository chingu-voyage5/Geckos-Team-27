const Home = require("../models/home");
const User = require("../models/user");
const { arrayToObject } = require("../utils");

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

const homeById = async (req, res) => {
  const home = await Home.findById({ _id: req.params.id }).then(home => home);
  res.json(home);
};

const editHome = async (req, res) => {
  const home = await Home.findById(req.params.id).then(home => {
    home.set(req.body);
    return home.save();
  });
  res.json(home);
};

const allHomes = async (req, res) => {
  const homes = await Home.find({}).then(home => {
    const res = arrayToObject(home, "_id");
    return res;
  });
  res.json(homes);
};

module.exports = {
  newHome,
  homeById,
  editHome,
  allHomes
};
