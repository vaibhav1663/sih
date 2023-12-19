const express = require("express");

const router = express.Router();
const { addBook } = require("../controllers/author/addBook");
const { getAllBooks } = require("../controllers/author/getBook");
const { revise } = require("../controllers/author/revise");
router.post("/addRecommendation", addBook);
router.get("/getBooks", getAllBooks);
router.post("/revise", revise);

module.exports = router;
