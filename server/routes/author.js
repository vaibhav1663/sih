const express = require("express");

const router = express.Router();
const { addBook } = require("../controllers/author/addBook");
const { getAllBooks } = require("../controllers/author/getBook");
router.post("/addRecommendation", addBook);
router.get("/getBooks", getAllBooks);

module.exports = router;
