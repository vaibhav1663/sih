const express = require("express");

const router = express.Router();
const { getBooks } = require("../controllers/books/getBooks");
const { addPublicReview } = require("../controllers/books/addPublicReview");
const { getTopPicks } = require("../controllers/books/getTopPicks");
const { getBookById } = require("../controllers/books/getBookById");
const {getReviewerResponse} = require("../controllers/books/getReviewerResponse");
const {getReviewedBooks} = require("../controllers/books/getReviewedBooks");
const {compareBooksById} = require("../controllers/books/compareBooksById");
router.post("/addPublicReview", addPublicReview);
router.post("/getBookById", getBookById);
router.post("/getReviewerResponse", getReviewerResponse);
router.get("/getReviewedBooks", getReviewedBooks);
router.post("/compareBooksById", compareBooksById);
router.get("/getBooks", getBooks);
router.get("/toppicks", getTopPicks);
module.exports = router;
