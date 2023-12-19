const Book = require("../../model/bookSchema");
const ReviewerQueue = require("../../model/reviewerqueue");

exports.addBookResponse = async (req, res) => {
  try {
    const { _id, reviewerid, H, A, B, C, D, E, F, G, PDFData } = req.body;

    // Find the reviewer queue by reviewer_id
    const reviewerQueue = await ReviewerQueue.findOne({
      reviewerid,
    });

    if (!reviewerQueue) {
      return res.status(404).json({ error: "Reviewer not found" });
    }

    // Remove the _id from tobereviewed and add it to the reviewed array
    await ReviewerQueue.findOneAndUpdate(
      { reviewerid },
      {
        $pull: { tobereviewed: _id },
        $addToSet: { reviewed: _id },
      }
    );

    // Calculate totals for each array
    const a_total = A.reduce((acc, value) => acc + value, 0);
    const b_total = B;
    const c_total = C.reduce((acc, value) => acc + value, 0);
    const d_total = D.reduce((acc, value) => acc + value, 0);
    const e_total = E.reduce((acc, value) => acc + value, 0);
    const g_total = G.reduce((acc, value) => acc + value, 0);
    const f_total = F.reduce((acc, value) => acc + value, 0);

    // Create a new response object
    const responseObject = {
      H,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      reviewerid,
      a_total,
      b_total,
      c_total,
      d_total,
      e_total,
      g_total,
      f_total,
      totalScore:
        a_total + b_total + c_total + d_total + e_total + g_total + f_total,PDFData
    };

    // Max scores
    const maxScores = {
      a: 50,
      b: 25,
      c: 14,
      d: 130,
      e: 81,
      g: 23,
      f: 24,
    };

    // Check if totals are less than 50% of max scores
    const isRecommended = Object.keys(maxScores).every(
      (key) => responseObject[`${key}_total`] > 0.5 * maxScores[key]
    );

    // Check if any member of H is false
    const isHValid = H.every((value) => value);

    // Update isRecommended based on the calculated values
    responseObject.isRecommended = isRecommended && isHValid;

    // Find the book by _id and push the new response object into the array
    await Book.findByIdAndUpdate(_id, {
      $push: {
        reviewerResponse: responseObject,
      },
    });

    res.status(200).json(responseObject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
