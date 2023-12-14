const underReviewBook = require("../../model/underReviewBookSchema");

exports.addBook = async (req, res) => {
  const { recomendedBy, name, desc, imageLink, buyLink, previewLink } =
    req.body;
  // console.log(req.body);

  try {
    // Check if a book with the given name already exists
    const existingBook = await underReviewBook.findOne({ name });

    if (existingBook) {
      return res
        .status(422)
        .json({ error: "Book with this name already exists" });
    }

    // If the book doesn't exist, create a new one
    const newBook = new underReviewBook({
      recomendedBy,
      underReview: false,
      name,
      desc,
      imageLink,
      buyLink,
      previewLink,
      reviewersAlotted: [],
    });

    // Save the new book to the database
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
