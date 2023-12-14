const express = require("express");

const router = express.Router();
const { getReviewers } = require("../controllers/admin/getReviewers");

router.get("/getReviewers", getReviewers);

module.exports = router;
