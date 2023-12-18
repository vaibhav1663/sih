const book = require("../../model/bookSchema");
const ObjectId = require('mongodb').ObjectId;
exports.getBookById = async (req, res) => {
  const { _id } = req.body;
  try {
    const allBooks = await book.findOne({
      _id: new ObjectId(_id)
    });
    if (!allBooks)
      return res.status(404).json({ error: "Book not found" });
    res.status(200).json(allBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
