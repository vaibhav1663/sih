const Book = require("../../model/bookSchema");
const ReviewerQueue = require("../../model/reviewerqueue");

exports.addBookResponse = async (req, res) => {
    try {
        const { _id, reviewer_id, H, A, B, C, D, E, G } = req.body;

        // Find the reviewer queue by reviewer_id
        const reviewerQueue = await ReviewerQueue.findOne({
            reviewerid: reviewer_id,
        });

        if (!reviewerQueue) {
            return res.status(404).json({ error: "Reviewer not found" });
        }

        // Remove the _id from tobereviewed and add it to the reviewed array
        await ReviewerQueue.findOneAndUpdate(
            { reviewerid: reviewer_id },
            {
                $pull: { tobereviewed: _id },
                $addToSet: { reviewed: _id },
            }
        );

        // Max scores
        const maxScores = {
            a: 50,
            b: 25,
            c: 14,
            d: 130,
            e: 81,
            g: 23,
        };
        const total = [A, B, C, D, E, G].map((x, i) =>
            i == 1 ? x : x.reduce((a, b) => a + b, 0)
        );
        const isRecommended = total.every(
            (x, i) => x > 0.5 * maxScores[Object.keys(maxScores)[i]]
        );
        // Check if totals are less than 50% of max scores
        // const isRecommended = Object.keys(maxScores).every(
        //     (key) => eval(`${key}_total`) < 0.5 * maxScores[key]
        // );
        // console.log(isRecommended);

        const totalSum = total.reduce((a, b) => a + b, 0);
        const maxSum = Object.values(maxScores).reduce((a, b) => a + b, 0);
        const grade = totalSum / maxSum;
        // Check if any member of H is false
        const isHValid = H.every((value) => value);
        // console.log(isHValid);
        // Create a new response object
        const responseObject = {
            ...Object.fromEntries(
                total.map((x, i) => [Object.keys(maxScores)[i], x])
            ),
            isRecommended: isRecommended && isHValid,
            totalScore: totalSum,
            grade:
                grade >= 0.5 && grade <= 0.75
                    ? "I"
                    : grade >= 0.75
                    ? "II"
                    : "NotGraded",
        };

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
