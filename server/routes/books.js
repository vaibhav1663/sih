const express = require("express");

const router = express.Router();
const { getBooks } = require("../controllers/books/getBooks");
const { addPublicReview } = require("../controllers/books/addPublicReview");
const { addBook } = require("../controllers/books/addBookResponse");
router.post("/addBook", addBook);
router.post("/addPublicReview", addPublicReview);
router.get("/getBooks", getBooks);

module.exports = router;
