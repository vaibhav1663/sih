const { getPrompt } = require("./prompt");
exports.getGeneralOverview = async (req, res) => {
  const { book } = req.body;

  const prompt = `Delve into the fascinating world of Indian medical knowledge within the pages of ${book}. Analyze its approach to health and healing through the lens of its specific traditional system (Ayurveda, Siddha, or Unani). Decipher key concepts like humors, doshas, or elements, and explore how they influence diagnosis, treatment, and overall well-being. Evaluate the book's strengths in areas like disease explanation, therapeutic recommendations (herbal remedies, lifestyle changes, etc.), and integration with modern medical practices. Ultimately, assess its value for [mention your level of knowledge and area of interest] and provide a clear recommendation. Let your review be a captivating journey into the wisdom of ancient healing traditions, revealing their unique perspective on health and harmony. This prompt leaves it open for Bard to analyze the book based on the system it delves into. You'll get a review tailored to the specific traditional medicine discussed in the book, while still covering elements related to diagnosis, treatment, and potential benefits for you. Remember, you can personalize this prompt further by mentioning the book title and your specific interests within Indian medical systems. I hope this helps you get the insightful review you're looking for! use the latest book available if not return a response of  any other popular or similar book, write it in a  textual manner, do not include exclamations`;
  const response = await getPrompt({ promptText: prompt });
  //   console.log(response);
  res.status(200).json({result: response});
};
