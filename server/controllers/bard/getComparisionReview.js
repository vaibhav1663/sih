const { getPrompt } = require("./prompt");
exports.getComparisionReview = async (req, res) => {
  const { obj } = req.body;

  const prompt = `analyze these data points to create a comparative review of two books only compare the score1 and score two of each paramater and let me kno which book is better: ${obj} Considerations:Go beyond scores and provide details for each category, highlighting strengths and weaknesses for both books.Analyze how specific aspects, like author expertise or publisher reputation, might influence reader experience.Compare writing styles, accessibility, and suitability for different audiences.If provided, delve into details about illustrations and their impact on comprehension or engagement.Offer a nuanced conclusion that acknowledges the advantages and limitations of each book based on your priorities and target audience. Give output like : Book1 is better than book2 in this this particular criteria, pls note never ever give "unfortunetly not possiblet to give error due to lack of data", `;
  const response = await getPrompt({ promptText: prompt });
  console.log(response);
  res.status(200).json({ message: response });
};
