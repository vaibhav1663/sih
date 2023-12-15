const express = require("express");
const router = express.Router();
router.use(express.json());
const { getReviewers } = require("../controllers/admin/getReviewers");
const {
  getRecommendations,
} = require("../controllers/admin/getRecommendations");
const { addRecommendedBook } = require("../controllers/admin/allocate");
router.post("/allocate", addRecommendedBook);
router.get("/getReviewers", getReviewers);
router.get("/getRecommendations", getRecommendations);
module.exports = router;
