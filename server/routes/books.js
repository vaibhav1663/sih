const express = require("express");

const router = express.Router();
const { getBooks } = require("../controllers/books/getBooks");
const { addPublicReview } = require("../controllers/books/addPublicReview");
const { getTopPicks } = require("../controllers/books/getTopPicks");
const { getBookById } = require("../controllers/books/getBookById");
router.post("/addPublicReview", addPublicReview);
router.post("/getBookById", getBookById);
router.get("/getBooks", getBooks);
router.get("/toppicks", getTopPicks);
module.exports = router;
