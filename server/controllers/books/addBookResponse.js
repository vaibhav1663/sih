const Book = require("../../model/bookSchema");

exports.addBook = async (req, res) => {
  const {
    uid,
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
    const newBook = new Book({
      uid,
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

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
