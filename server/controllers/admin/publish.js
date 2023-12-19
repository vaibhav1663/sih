const Book = require("../../model/bookSchema");

exports.publish = async (req, res) => {
  try {
    const { _id } = req.body;

    // Find the book by _id
    const foundBook = await Book.findById(_id);

    if (!foundBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Count occurrences of true in isRecommended
    const trueCount = foundBook.reviewerResponse.filter(
      (response) => response.isRecommended
    ).length;

    // Set isRecommended to true if it occurs more than half of the times
    const isRecommended = trueCount > foundBook.reviewerResponse.length / 2;

    // Calculate average totalScore
    const totalScoreAverage =
      foundBook.reviewerResponse.reduce(
        (acc, response) => acc + response.totalScore,
        0
      ) / foundBook.reviewerResponse.length;

    // Update the book document with the averages
    const updatedBook = await Book.findByIdAndUpdate(_id, {
      totalScore: totalScoreAverage,
      isRecommended: isRecommended,
      reviewerCount: foundBook.reviewerResponse.length,
    });

    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
