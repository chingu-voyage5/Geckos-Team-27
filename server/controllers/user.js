const User = require("../models/user");
const { arrayToObject } = require("../utils");

const profileById = async (req, res) => {
  const _id = req.params.id;
  const profile = await User.findById(_id).then(user => {
    const _user = {
      id: user.id,
      joindate: user.joindate,
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.city,
      state: user.state,
      country: user.country,
      languages: user.languages,
      school: user.school,
      work: user.work,
      verified: user.verified,
      superuser: user.superuser,
      homes: user.homes,
      reviews: user.reviews,
      references: user.references,
      intro: user.intro,
      image: user.image
    };
    return _user;
  });
  res.json(profile);
};

const allProfiles = async (req, res) => {
  const users = await User.find({}).then(user => {
    const result = arrayToObject(user, "_id");
    return result;
  });
  res.json(users);
};

const editUser = async (req, res) => {
  const user = await User.findById(req.params.id).then(user => {
    user.set(req.body);
    return user.save();
  });
  res.json(user);
};

module.exports = {
  profileById,
  allProfiles,
  editUser
};
