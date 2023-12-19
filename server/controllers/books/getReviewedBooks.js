const book = require("../../model/bookSchema");
exports.getReviewedBooks = async (req, res) => {
  try {
    const allBooks = await book.find();
    res.status(200).json(allBooks.filter((x)=>x.isRecommended));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
