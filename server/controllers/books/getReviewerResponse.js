const book = require("../../model/bookSchema");
const ObjectId = require('mongodb').ObjectId;
exports.getReviewerResponse = async (req) => {
  const { _id } = req;
  try {
    const allBooks = await book.findOne({
      _id: new ObjectId(_id)
    });
    const keyMappings = {
      H: "Ethical issues(related to author editor and publishor)",
      A: "Author credibitlity",
      B: "Publisher credibitlity",
      C: "in general",
      D: "physical appearance structure and organisation",
      E: "subject matter",
      F: "Language",
      G: "Illustrations"
    };
    const keysToInclude = ["A", "B", "C", "D", "E", "F", "G"]

    if (!allBooks)
      return res.status(404).json({ error: "Book not found" });
// console.log({allBooks})
const resp =  allBooks.reviewerResponse;
// console.log({resp})

    const reviewerResponse = allBooks.reviewerResponse.map((x) => Object.fromEntries(Object.entries(x).filter(([key, value]) => keysToInclude.indexOf(key) != -1))).reduce((totalResponse, response) => {
      console.log(response);
      (Object.entries(response).forEach((obj) => {
        const [key, value] = obj;
        // console.log({ key, value })
        if (key == "B") {

          totalResponse[key] += Number(value);
          return totalResponse
        }
        if (value instanceof Array && value) {
          // console.log(">>", { value })
          totalResponse[key] = value?.map((x, i) => Number(x) + (totalResponse[key][i] ? totalResponse[key][i] : 0))
        };
      }))

      return totalResponse
    }, ({ A: [], B: 0, C: [], D: [], E: [], F: [], G: [] }));
    console.log({ reviewerResponse })
    const totalReviewers = Object.entries(reviewerResponse).length
    const detailedReviewerResponse = Object.entries(reviewerResponse).map(([key, value]) => {
      return [keyMappings[key
      ], value instanceof Array ? value.reduce((t, x) => t + x, 0)/totalReviewers : value/totalReviewers];
    })
    // console.log({ detailedReviewerResponse })
    return detailedReviewerResponse;
  } catch (error) {
    return ({ error: "Internal server error" });
  }
};
