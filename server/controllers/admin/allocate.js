const Book = require("../../model/bookSchema");
const RecommendedBook = require("../../model/recommendedBooks");
const ReviewerQueue = require("../../model/reviewerqueue");

exports.addRecommendedBook = async (req, res) => {
    try {
        const {
            name,
            desc,
            imageLink,
            buyLink,
            previewLink,
            underReview,
            reviewersAllotted,
        } = req.body;

        // Check if the required fields are present in the request body
        if (!name || !desc || !imageLink || !buyLink || !previewLink) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        console.log(reviewersAllotted);
        // Create a new book object using parameters from recommended book and additional parameters from bookSchema
        const newBook = new Book({
            // Add additional parameters as needed
            publicRating: 0,
            underReview,
            publicCount: 0,
            reviewerRating: 0,
            reviewerCount: 0,
            totalScore: 0,
            isRecommended: true,
            reviewerResponse: [],
            users: [],
            ...req.body,
        });

        // Save the new book object to the 'books' collection
        // Save the new book object to the 'books' collection
        const savedBook = await newBook.save();
        // Find the recommended book by _id and update the alloted parameter
        // Find the recommended book by _id and update the alloted parameter
        await RecommendedBook.findByIdAndUpdate(req.body._id, {
            underReview: true,
        });

        // Iterate through the reviewersAllotted array
        for (const reviewerID of reviewersAllotted) {
            // Find the reviewer queue by reviewerid
            const reviewerQueue = await ReviewerQueue.findOne({
                reviewerid: reviewerID,
            });

            if (reviewerQueue) {
                // If the reviewer queue exists, update the tobereviewed array
                await ReviewerQueue.findOneAndUpdate(
                    { reviewerid: reviewerID },
                    { $addToSet: { tobereviewed: savedBook._id } }
                );
            } else {
                // If the reviewer queue does not exist, create a new one
                const newReviewerQueue = new ReviewerQueue({
                    reviewerid: reviewerID,
                    tobereviewed: [savedBook._id],
                    reviewed: [],
                });
                await newReviewerQueue.save();
            }
        }

        res.status(201).json(savedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
