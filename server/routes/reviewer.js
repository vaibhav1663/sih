const express = require("express");

const router = express.Router();
const { getBooksByReviewerId } = require("../controllers/reviewer/getBooks");

router.post("/getBooks", getBooksByReviewerId);

module.exports = router;
