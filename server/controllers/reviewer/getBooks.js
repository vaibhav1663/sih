const rq = require("../../model/reviewerqueue");
const book = require("../../model/bookSchema");

exports.getBooksByReviewerId = async (req, res) => {
  const { _id } = req.body;
  console.log(req.body)
  try {
    // Find reviewer queue based on reviewer ID
    const reviewerQueue = await rq.findOne({
      reviewerid: _id,
    });

    // Check if there are no books in the reviewer queue
    if (!reviewerQueue) {
      return res
        .status(404)
        .json({ error: "No books found for the given reviewer id" });
    }

    const { tobereviewed, reviewed } = reviewerQueue;

    // Fetch details for books in tobereviewed array
    const tobereviewedBooks = await Promise.all(
      tobereviewed.map(async (element) => {
        return await book.findById(element);
      })
    );

    // Fetch details for books in reviewed array
    const reviewedBooks = await Promise.all(
      reviewed.map(async (element) => {
        return await book.findById(element);
      })
    );

    // Return the array of books
    res.status(200).json({ tobereviewedBooks, reviewedBooks });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
