const express = require("express");

const router = express.Router();
const {
  getGeneralOverview,
} = require("../controllers/bard/getGeneralOverview");
const {
  getParameterizedReview,
} = require("../controllers/bard/getParameterizedReview");
const {
  getComparisionReview,
} = require("../controllers/bard/getComparisionReview");
router.post("/getGeneralOverview/", getGeneralOverview);
router.post("/getParameterizedReview/", getParameterizedReview);
router.post("/getComparisionReview/", getComparisionReview);

module.exports = router;
