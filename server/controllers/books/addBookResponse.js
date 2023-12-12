const Book = require("../../model/bookSchema");

exports.addBook = async (req, res) => {
  const {
    name,
    publicRating,
    publicCount,
    reviewerRating,
    reviewerCount,
    totalScore,
    isRecommended,
    desc,
    imageLink,
    buyLink,
    previewLink,
    reviewer1,
    reviewer2,
    reviewer3,
    users,
  } = req.body;

  try {
    // Check if a book with the given name already exists
    const existingBook = await Book.findOne({ name });

    if (existingBook) {
      return res
        .status(422)
        .json({ error: "Book with this name already exists" });
    }

    // If the book doesn't exist, create a new one
    const newBook = new Book({
      name,
      publicRating,
      publicCount,
      reviewerRating,
      reviewerCount,
      totalScore,
      isRecommended,
      desc,
      imageLink,
      buyLink,
      previewLink,
      reviewer1,
      reviewer2,
      reviewer3,
      users,
    });

    // Save the new book to the database
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
