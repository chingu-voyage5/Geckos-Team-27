const Reference = require("../models/reference");
const User = require("../models/user");
const { arrayToObject, formatDate } = require("../utils");

// get user id from session
const user_id = req => req.session.passport.user;

const allReferences = async (req, res) => {};

const referenceById = async (req, res) => {};

const newReference = async (req, res) => {
  const ref = new Reference(req.body);
  ref.referencerId = user_id(req);
  ref.referenceDate = formatDate(new Date());
  const newRef = await ref.save();
  const referencee = await User.findById(ref.hostId).then(user => {
    user.references = [...user.references, newRef];
    return user.save();
  });
  res.json(newRef);
};

const editReference = async (req, res) => {};

module.exports = {
  allReferences,
  referenceById,
  newReference,
  editReference
};
