const express = require("express");

const router = express.Router();
const { plagiarism } = require("../controllers/plagiarism/plagiarism");

router.post("/text", plagiarism);

module.exports = router;
