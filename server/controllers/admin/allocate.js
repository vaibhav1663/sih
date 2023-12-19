const Book = require("../../model/bookSchema");
const RecommendedBook = require("../../model/recommendedBooks");
const ReviewerQueue = require("../../model/reviewerqueue");
const { sendMailAllocate } = require("./sendMail")
exports.addRecommendedBook = async (req, res) => {
  try {
    const { id, reviewers } = req.body;

    // Find the recommended book by _id and update the alloted parameter
    let bookInRecommendedCol = await RecommendedBook.findById(id);
    if (bookInRecommendedCol && reviewers.length === 3) {
      await RecommendedBook.findByIdAndUpdate(id, {
        underReview: true,
        reviewersAlotted: reviewers,
      });
      bookInRecommendedCol.underReview = true;
      bookInRecommendedCol.reviewersAlotted = reviewers;
      let newBookinBookCol = new Book({
        _id: bookInRecommendedCol._id,
        name: bookInRecommendedCol.name,
        desc: bookInRecommendedCol.desc,
        buyLink: bookInRecommendedCol.buyLink,
        imageLink: bookInRecommendedCol.imageLink,
        isRecommended: false,
        previewLink: bookInRecommendedCol.previewLink,
        publicCount: 0,
        publicRating: 0,
        reviewerAlloted: reviewers,
        reviewerCount: 0,
        reviewerRating: 0,
        underReview: true,
        reviews: [],
        reviewerResponse: [],
        totalScore: 0,
        users: [],
        reject: [],
      }).save();
      const mailsToSend = reviewers.map(async (id) => {
        return await sendMailAllocate({ bookTitle: bookInRecommendedCol.name, desc: bookInRecommendedCol.desc, reviewerId: id, bookId: bookInRecommendedCol._id });
      })
      const mailsResponse = await Promise.all(
        mailsToSend
      );
      
    } else {
      return res.status(404).json({ error: "Book not found" });
    }

    // Iterate through the reviewersAlotted array
    for (const reviewerID of reviewers) {
      // Find the reviewer queue by reviewerid
      const reviewerQueue = await ReviewerQueue.findOne({
        reviewerid: reviewerID,
      });

      if (reviewerQueue) {
        // If the reviewer queue exists, update the tobereviewed array
        await ReviewerQueue.findOneAndUpdate(
          { reviewerid: reviewerID },
          { $addToSet: { tobereviewed: bookInRecommendedCol._id } }
        );
      } else {
        // If the reviewer queue does not exist, create a new one
        const newReviewerQueue = new ReviewerQueue({
          reviewerid: reviewerID,
          tobereviewed: [bookInRecommendedCol._id],
          reviewed: [],
        });
        await newReviewerQueue.save();
      }
    }

    res.status(201).json({ code: 201, message: "Book added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
