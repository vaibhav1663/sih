const mongoose = require("mongoose");

const underReviewBookSchema = new mongoose.Schema({
  recomendedBy: {
    //id
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  buyLink: {
    type: String,
    required: true,
  },
  previewLink: {
    type: String,
    required: true,
  },
  reviewersAlotted: {
    type: Array,
    required: true,
  },
  underReview: {
    type: Boolean,
    required: true,
  },
});

const buff = mongoose.model("recommendedbooks", underReviewBookSchema);

module.exports = buff;
