const express = require("express");
const router = express.Router();
router.use(express.json());
const { getReviewers } = require("../controllers/admin/getReviewers");
const {
    getRecommendations,
} = require("../controllers/admin/getRecommendations");
const { publish } = require("../controllers/admin/publish");
const { addRecommendedBook } = require("../controllers/admin/allocate");
const { getBookById } = require("../controllers/admin/getBookById");
const { getReviews } = require("../controllers/admin/getReviews");
router.post("/allocate", addRecommendedBook);
router.post("/getBookById", getBookById);
router.post("/publish", publish);
router.post("/getReviews", getReviews);
router.get("/getReviewers", getReviewers);
router.get("/getRecommendations", getRecommendations);
module.exports = router;
