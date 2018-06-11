const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  host: {
    hostId: Schema.Types.ObjectId,
    ref: "homes"
  },
  location: {
    address: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
    lat: Number,
    lng: Number
  },
  information: {
    title: String,
    price: Number,
    bedrooms: Number,
    guestLimit: Number,
    bathrooms: Number,
    amentities: {
      pets: Boolean,
      elevator: Boolean,
      smoking: Boolean,
      internet: Boolean
    },
    images: [String]
  }
});

const Home = mongoose.model("homes", homeSchema);

module.exports = Home;
