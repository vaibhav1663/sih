const publicReview = require("../../model/bookSchema");

exports.addPublicReview = async (req, res) => {
  const { _id, overall, appearance, comment, content } = req.body;

  try {
    // Find the document by _id
    const book = await publicReview.findById(_id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Append the userData to the users array
    let userData = {
      overall,
      appearance,
      comment,
      content,
    };
    book.users.push(userData);

    // Update publicRating and publicCount
    const incomingOverall = overall;
    const currentPublicRating = book.publicRating;
    const currentPublicCount = book.publicCount;

    // Calculate the new publicRating based on the average of incomingOverall and currentPublicRating
    const newPublicRating = currentPublicRating + (incomingOverall - currentPublicRating) / (currentPublicCount + 1) ;

    // Update publicRating and increment publicCount
    book.publicRating = newPublicRating;
    book.publicCount = currentPublicCount + 1;

    // Save the updated document
    const updatedBook = await book.save();

    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
