const user = require("../../model/userSchema");

exports.getReviewers = async (req, res) => {
  try {
    // Find all books in the database
    const allReviewers = await user.find({ role: "reviewer" });

    // // Check if there are no books
    if (!allReviewers) {
      return res.status(404).json({ error: "No reveiwers found" });
    }

    // Return the array of books
    res.status(200).json(allReviewers);
  } catch (error) {
    console.error("Error fetching Reviewers:", error); // Log the error
    res.status(500).json({ error: "Internal server error" });
  }
};
