const mongoose = require("mongoose");

const referenceSchema = new mongoose.Schema({});

const Reference = mongoose.model("references", referenceSchema);

module.exports = Reference;
