const Reference = require("../models/reference");
const User = require("../models/user");

// get user id from session
const user_id = req => req.session.passport.user;

const allReferences = async (req, res) => {};

const referenceById = async (req, res) => {};

const newReference = async (req, res) => {};

const editReference = async (req, res) => {};

module.exports = {
  allReferences,
  referenceById,
  newReference,
  editReference
};
