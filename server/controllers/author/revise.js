const Book = require("../../model/bookSchema");
const RecommendedBook = require("../../model/recommendedBooks");

exports.revise = async (req, res) => {
  const { _id, name, desc, imageLink, buyLink, previewLink } = req.body;

  try {
    // Check in recommendedBooks
    const bookInRecommendedBooks = await RecommendedBook.findById(_id);

    if (!bookInRecommendedBooks)
      return res.status(400).json({ message: "No book found" });

    const { reject } = bookInRecommendedBooks;

    if (reject.length >= 10)
      return res.status(405).send("Maximum number of revisions exhausted");
    if (reject.length % 2 == 0)
      return res.status(405).send("Already Under Revision");
    if (reject.length === 0)
      return res.status(400).json({ message: "No reject found" });

    const latestReject = reject[reject.length - 1];
    const { date, deadline } = latestReject;

    const number = parseInt(deadline, 10);
    const dateObject = new Date(date);
    dateObject.setDate(dateObject.getDate() + number);

    const today = new Date();
    const isReviseAllowed = today <= dateObject;

    if (isReviseAllowed) {
      // Update RecommendedBook
      const updatedRecommendedBook = await RecommendedBook.findByIdAndUpdate(
        _id,
        {
          name,
          desc,
          imageLink,
          buyLink,
          previewLink,
          reviewerAlloted: [],
          date: new Date(),
          underReview: false,
          $push: { reject: { date: new Date() } },
        },
        { new: true } // Return the updated document
      );

      // Update Book
      const updatedBook = await Book.findByIdAndUpdate(
        _id,
        {
          name,
          publicRating: 0,
          reviewerRating: 0,
          reviewerCount: 0,
          totalScore: 0,
          isRecommended: false,
          desc,
          imageLink,
          buyLink,
          previewLink,
          reviewerAlloted: [],
          reviewerResponse: [],
          $push: { reject: { date: new Date() } },
        },
        { new: true } // Return the updated document
      );

      res.status(200).json({ message: "Book updated successfully" });
    } else {
      res.status(404).json({ message: "Time exceeded for revision" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
