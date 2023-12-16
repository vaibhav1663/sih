const express = require("express");

const router = express.Router();
const { getBooksByReviewerId } = require("../controllers/reviewer/getBooks");
const { addBookResponse } = require("../controllers/reviewer/addBookResponse");
router.post("/getBooks", getBooksByReviewerId);
router.post("/addResponse", addBookResponse);

module.exports = router;
