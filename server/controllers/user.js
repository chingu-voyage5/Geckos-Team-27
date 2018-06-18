const User = require("../models/user");

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

module.exports = {
  profileById
};
