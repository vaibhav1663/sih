const express = require("express");
const { addReview } = require("../controllers/books/addBookResponse");
const { addPublicReview } = require("../controllers/books/addPublicReview");

const router = express.Router();
const { getBooks } = require("../controllers/books/getBooks");

// router.post("/addBookReview", addReview);
// router.post("/addBookPublicReview", addPublicReview);

router.get("/getBooks", getBooks);

module.exports = router;
