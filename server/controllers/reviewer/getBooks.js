const Book = require("../../model/bookSchema");

exports.getBooksByReviewerId = async (req, res) => {
  const { id } = req.query;

  try {
    // Find books where reviewersAllotted array contains the provided id
    const books = await Book.find({
      reviewersAllotted: { $in: [id] },
    });

    // Check if there are no books
    if (!books || books.length === 0) {
      return res
        .status(404)
        .json({ error: "No books found for the given reviewer id" });
    }

    // Return the array of books
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
