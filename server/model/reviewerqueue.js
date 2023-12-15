const mongoose = require("mongoose");

const rq1 = new mongoose.Schema({
  reviewerid: {
    type: String,
    required: true,
  },
  tobereviewed: {
    type: Array,
    required: true,
  },
  reviewed: {
    type: Array,
    required: true,
  },
});

const buff = mongoose.model("reveiwerqueue", rq1);

module.exports = buff;
