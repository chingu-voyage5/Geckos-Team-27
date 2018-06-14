const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  hostid: {
    type: Schema.Types.ObjectId,
    ref: "users"
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
    price: {
      weekday: Number,
      weekend: Number,
      extra: Number,
      extraminguest: Number,
      cleaning: Number
    },
    bedrooms: Number,
    guestLimit: Number,
    sleeping: {
      bedroom1: {
        twin: Number,
        queen: Number,
        king: Number,
        couch: Number,
        airmattress: Number
      },
      bedroom2: {
        twin: Number,
        queen: Number,
        king: Number,
        couch: Number,
        airmattress: Number
      },
      bedroom3: {
        twin: Number,
        queen: Number,
        king: Number,
        couch: Number,
        airmattress: Number
      },
      bedroom4: {
        twin: Number,
        queen: Number,
        king: Number,
        couch: Number,
        airmattress: Number
      },
      bedroom5: {
        twin: Number,
        queen: Number,
        king: Number,
        couch: Number,
        airmattress: Number
      },
      common: {
        twin: Number,
        queen: Number,
        king: Number,
        couch: Number,
        airmattress: Number
      }
    },
    bathrooms: Number,
    rules: {
      smoking: Boolean,
      pets: Boolean,
      parties: Boolean,
      checkin: String,
      checkout: String,
      selfcheckin: Boolean,
      comments: String
    },
    minimumstay: Number,
    cancellation: String,
    description: String,
    homespace: String,
    guestaccess: String,
    interaction: String,
    othernotes: String,
    amenities: {
      pets: Boolean,
      elevator: Boolean,
      doorman: Boolean,
      kids: Boolean,
      smoking: Boolean,
      kitchen: Boolean,
      intercom: Boolean,
      internet: Boolean,
      events: Boolean,
      parking: Boolean,
      hottub: Boolean,
      wheelchair: Boolean,
      cable: Boolean,
      gym: Boolean,
      breakfast: Boolean,
      fireplace: Boolean,
      dryer: Boolean,
      laptop: Boolean,
      pool: Boolean,
      washer: Boolean,
      tv: Boolean,
      iron: Boolean,
      hangers: Boolean,
      essentials: Boolean,
      hairdryer: Boolean,
      ac: Boolean,
      shampoo: Boolean,
      heating: Boolean,
      streetparking: Boolean,
      privent: Boolean,
      ethernet: Boolean,
      paidparking: Boolean
    },
    familyamenities: {
      babybath: Boolean,
      babymonitor: Boolean,
      babysitter: Boolean,
      changingtable: Boolean,
      toys: Boolean,
      dinnerware: Boolean,
      crib: Boolean,
      fireplaceguards: Boolean,
      gameconsole: Boolean,
      highchair: Boolean,
      outletcovers: Boolean,
      packnplay: Boolean,
      shades: Boolean,
      stairgate: Boolean,
      tablecorners: Boolean,
      windowguards: Boolean
    },
    safetyfeatures: {
      smoke: Boolean,
      firstaid: Boolean,
      fire: Boolean
    }
  },
  images: [String],
  reviewAvg: {
    avg: Number,
    accuracy: Number,
    communication: Number,
    cleanliness: Number,
    location: Number,
    checkin: Number,
    value: Number
  },
  reviews: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "reviews"
      }
    }
  ],
  booking: [
    {
      dateID: Number,
      yearID: Number,
      adults: Number,
      children: Number,
      infants: Number,
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ]
});

const Home = mongoose.model("homes", homeSchema);

module.exports = Home;
