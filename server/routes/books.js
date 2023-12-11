const express = require("express");
const { addBook } = require("../controllers/books/addBookResponse");
const router = express.Router();
const { getBooks } = require("../controllers/books/getBooks");

router.post("/addBookResponse", addBook);
router.get("/getBooks", getBooks);

module.exports = router;
