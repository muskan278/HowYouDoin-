const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Activity = mongoose.model("activity", ActivitySchema);

module.exports = Activity;
