const book = require("../../model/bookSchema");
exports.getBooks = async (req, res) => {
  try {
    const allBooks = await book.find();
    res.status(200).json(allBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
