const book = require("../../model/bookSchema");
exports.getBookById = async (req, res) => {
  const { _id } = req.body;

  try {
    const allBooks = await book.findOne({
      _id: _id,
    });
    if (allBooks.length === 0)
      return res.status(404).json({ error: "Book not found" });
    res.status(200).json(allBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
