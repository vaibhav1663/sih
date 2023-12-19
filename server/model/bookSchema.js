const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
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
  reviewerAlloted: {
    type: [String],
    required: true,
  },
  reviewerResponse: {
    type: Array,
    required: true,
  },

  users: {
    type: Array,
    required: true,
  },
  reject: {
    type: Array,
    required: true,
  },
});

const User = mongoose.model("books", bookSchema);

module.exports = User;
// reviewer1: {
//   //array of 3 members (boolean) each corresponsing to one question
//   H: { type: Array, required: true },
//   // all members are non negative
//   //array of 5 members (numbers) each corresponsing to one question
//   //max value of each member in A [10,5,5,10,20]
//   A: { type: Array, required: true },
//   //max value of B is 25
//   B: { type: Number, required: true },
//   //array of 3 members (numbers) each corresponsing to one question
//   //max value of each member in C is [5,3,3,3]
//   C: { type: Array, required: true },
//   //array of 20 members (numbers) each corresponsing to one question
//   // max value of D [5,5,10,5,5,5,10,10,10,15,5,5,5,5,5,5,5,5,5,5]
//   D: { type: Array, required: true },
//   //array of 21 members (numbers) each corresponsing to one question
//   // max value of E [5,5,5,5,5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,5]
//   E: { type: Array, required: true },
//   //array of 5 members (numbers) each corresponsing to one question
//   // max value of E [10,5,5,3]

//   G: { type: Array, required: true },
// },

//each element in users object should be a object of the tyoe
// {
//   content: type integer (goes from 0-5)
//   appearance :type integer (goes from 0-5)
//   overall:type integer (goes from 0-5)
// comment: String
// }
