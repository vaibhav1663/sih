const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const axios = require("axios");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const plagiarismOptions = {
  // extra api key :a8e61e8a45msh23ae90ad7647480p17b50ajsne0288059280e
  method: "POST",
  url: "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "b0050cd7bamsh17dbdf7eaee5d26p105176jsna8f74b8cdaaa",
    "X-RapidAPI-Host":
      "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com",
  },
};

const checkPlagiarism = async (text, res) => {
  const options = {
    ...plagiarismOptions,
    data: {
      text: text,
      language: "en",
      includeCitations: false,
      scrapeSources: false,
    },
  };

  try {
    const response = await axios.request(options);
    const plagiarismResult = response.data;

    // Process plagiarismResult as needed
    console.log(plagiarismResult);

    res.status(200).json({ plagiarismResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error checking plagiarism" });
  }
};

router.post("/text", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "PDF file is required" });
    }

    const buffer = await req.file.buffer;
    const data = await pdfParse(buffer);

    const text = data.text;

    await checkPlagiarism(text, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
