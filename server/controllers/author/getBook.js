const underReviewBook = require("../../model/recommendedBooks");

exports.getAllBooks = async (req, res) => {
  try {
    // Find all books in the database
    const allBooks = await underReviewBook.find();

    // // Check if there are no books
    if (!allBooks) {
      return res.status(404).json({ error: "No books found" });
    }

    // Return the array of books
    res.status(200).json(allBooks);
  } catch (error) {
    console.error("Error fetching books:", error); // Log the error
    res.status(500).json({ error: "Internal server error" });
  }
};
