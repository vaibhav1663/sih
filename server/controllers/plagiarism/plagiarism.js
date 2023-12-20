const axios = require("axios");

const plagiarismOptions = {
  method: "POST",
  url: "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "b0050cd7bamsh17dbdf7eaee5d26p105176jsna8f74b8cdaaa",
    "X-RapidAPI-Host":
      "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com",
  },
};

exports.plagiarism = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const options = {
      ...plagiarismOptions,
      data: {
        text: text,
        language: "en",
        includeCitations: true,
        scrapeSources: true,
      },
    };

    try {
      const response = await axios.request(options);
      const plagiarismResult = response.data;

      // Process plagiarismResult as needed
      //   console.log(plagiarismResult);

      res.status(200).json({ plagiarismResult });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error checking plagiarism" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
