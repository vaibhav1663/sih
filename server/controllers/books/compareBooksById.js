const { getReviewerResponse } = require("./getReviewerResponse");
exports.compareBooksById = async (req, res) => {
    const { id1, id2 } = req.body;
    console.log(req.body)
    try {
        // console.log({ id1 })
        const reviewerResponse1 = await getReviewerResponse({
            _id: id1

        });
        const reviewerResponse2 = await getReviewerResponse({
            _id: id2

        });
        // console.log({ reviewerResponse1, reviewerResponse2 })
        const dt = reviewerResponse1.map(([key, value]) => {
            // console.log({value},  reviewerResponse2[key])
            return ({name:key,score1:value,score2: Object.fromEntries(reviewerResponse2)[key]})
        })
        // console.log(
        //     {dt}
        // )
        res.status(200).json(dt);
    } catch (error) {
        // console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
