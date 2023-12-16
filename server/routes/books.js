const express = require("express");

const router = express.Router();
const { getBooks } = require("../controllers/books/getBooks");
const { addPublicReview } = require("../controllers/books/addPublicReview");
const { getTopPicks } = require("../controllers/books/getTopPicks");
router.post("/addPublicReview", addPublicReview);
router.get("/getBooks", getBooks);
router.get("/toppicks", getTopPicks);
module.exports = router;
