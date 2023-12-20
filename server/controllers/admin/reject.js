const Book = require("../../model/bookSchema");
const RecommendedBook = require("../../model/recommendedBooks");

exports.reject = async (req, res) => {
  try {
    const { _id, message, deadline } = req.body;

    // Check if the book exists in the recommendedBook collection
    const recommendedBook = await RecommendedBook.findById(_id);

    // Check if the book exists in the Books collection
    const book = await Book.findById(_id);

    if (recommendedBook || book) {
      if (recommendedBook) {
        if (recommendedBook.reject.length % 2 !== 0)
          return res.send("Already Rejected").status(400);
      }
      // Create a new reject object
      const rejectObject = {
        message: message,
        date: new Date(),
        deadline: deadline,
      };

      // Update the recommendedBook collection if the book is found
      if (recommendedBook) {
        await RecommendedBook.findByIdAndUpdate(_id, {
          $push: { reject: rejectObject },
        });
      }
      if (book) {
        rejectObject.reviewerResponse = book.reviewerResponse;
      }

      // Update the Bonoks collection if the book is found
      if (book) {
        await Book.findByIdAndUpdate(_id, {
          $push: { reject: rejectObject },
        });
      }

      return res.status(200).json({ message: "Book rejected successfully" });
    }

    return res.status(404).json({ error: "Book not found" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
