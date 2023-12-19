const express = require("express");

const router = express.Router();
const { getGeneralOverview } = require("../controllers/bard/getGeneralOverview");
// const { getParameterizedReview } = require("../controllers/bard/getParameterizedReview");
router.post("/getGeneralOverview/", getGeneralOverview);
// router.post("/getParameterizedReview", getParameterizedReview);

module.exports = router;


