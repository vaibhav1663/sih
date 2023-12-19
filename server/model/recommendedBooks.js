const mongoose = require("mongoose");

const recommendedBook = new mongoose.Schema({
  recomendedBy: {
    //id
    type: String, // This was number -> changed to string
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
  referenceId: {
    // A reference id for teacher for a book recommended
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  reject: {
    type: Array,
    required: true,
  },
});

const buff = mongoose.model("recommendedbooks", recommendedBook);

module.exports = buff;
