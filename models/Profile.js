const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  images: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "image",
  },
  location: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  preference: {
    type: String,
    enum: ["male", "female", "both"],
    default: "both",
  },
  interests: {
    type: [String],
  },
  bio: {
    type: String,
  },
  social: {
    instagram: {
      type: String,
    },
  },
});

module.exports = User = mongoose.model("profile", ProfileSchema);
