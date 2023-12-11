const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  uid: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  publicRating: {
    type: Number,
    required: true,
  },
  publicCount: {
    type: Number,
    required: true,
  },
  reviewerRating: {
    type: Number,
    required: true,
  },
  reviewerCount: {
    type: Number,
    required: true,
  },
  totalScore: {
    type: Number,
    required: true,
  },
  isRecommended: {
    type: Boolean,
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
  reviewer1: {
    type: Array,
    required: true,
  },
  reviewer2: {
    type: Array,
    required: true,
  },
  reviewer3: {
    type: Array,
    required: true,
  },
  users: {
    type: Array,
    required: true,
  },
});

const User = mongoose.model("BOOKS", bookSchema);

module.exports = User;
