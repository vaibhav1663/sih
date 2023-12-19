const Book = require("../../model/bookSchema");
const RecommendedBook = require("../../model/recommendedBooks");
function isReviewAllowed(reviewDate, deadline) {
    const reviewDateTime = new Date(reviewDate);
    const currentDate = new Date();
    return (currentDate - reviewDateTime) < (deadline * 1000 * 24 * 60 * 60)

}
exports.revise = async (req, res) => {
    const { _id, name, desc, imageLink, buyLink, previewLink } = req.body;
    // book and recommendedBooks -> find id
    //reject array techya last ele, date, deadline, add-> todaysDate<addn -> go forward -> update these 5 in both,
    // const bookInAllBooks = await Book.findById(_id);
    try {
        const bookInRecommendedBooks = await RecommendedBook.findById(_id);
        if (!bookInRecommendedBooks) return res.status(400).json({ message: "No book found" });
        const { reject } = bookInRecommendedBooks;
        if (reject.length === 0) return res.status(400).json({ message: "No reject found" })
        const latestReject = reject[reject.length - 1];
        const { date, deadline } = latestReject;
        const isReviseAllowed = isReviewAllowed(date, deadline);
        if (isReviseAllowed) {
            const updatedRecommendedBook = await RecommendedBook.findByIdAndUpdate(_id, {
                name, desc, imageLink, buyLink, previewLink, reviewerAlloted: [], date: new Date(), underReview: false
            });
            const updatedBook = await Book.findByIdAndUpdate(_id, {
                name, publicRating: 0, reviewerRating: 0, reviewerCount: 0, totalScore: 0, isRecommended: false, desc, imageLink, buyLink, previewLink, reviewerAlloted: [], users: [], reviewerResponse: []
            });
            console.log({ updatedRecommendedBook, updatedBook })

            res.status(200).json({ message: "Book updated successfully" });
        } else {
            res.status(404).json({ message: "Time exceeded for revision" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
};
