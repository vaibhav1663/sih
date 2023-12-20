const book = require("../../model/bookSchema");

exports.getReviews = async (req, res) => {
    const { id } = req.body;
    try {
        const bookReview = await book.findById(id);
        if (!bookReview) {
            return res.status(404).json({ error: "Book not found" });
        }
        if (bookReview.reviewerResponse.length === 0) {
            return res.status(404).json({ error: "No reveiwer response found" });
        }
        const reviewers = bookReview.reviewerResponse;
        res.status(200).json(reviewers);
    } catch (error) {
        console.error("Error fetching Reviewers:", error); // Log the error
        res.status(500).json({ error: "Internal server error" });
    }
};
