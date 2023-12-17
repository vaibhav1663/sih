const { randomId, checkId, getId } = require("../../lib/uid_generator");
const underReviewBook = require("../../model/recommendedBooks");

exports.addBook = async (req, res) => {
  const { recomendedBy, name, desc, imageLink, buyLink, author, previewLink } =
    req.body;
  // console.log(">?>?", req.body);
  // const dateString = [year, month, day].join('-')

  try {
    // Check if a book with the given name already exists
    const existingBook = await underReviewBook.findOne({ name });
    if (existingBook) {
      return res
        .status(422)
        .json({ error: "Book with this name already exists" });
    }

    // If the book doesn't exist, create a new one

    const allBooks = (await underReviewBook.find()).map((x) => x.referenceId);
    const referenceId = getId({ length: 8, existing: allBooks });
    const newBook = new underReviewBook({
      recomendedBy,
      underReview: false,
      name,
      desc,
      author,
      imageLink,
      buyLink,
      previewLink,
      date: new Date(),
      referenceId,
      reviewersAlotted: [],
    });
    console.log(new Date(Date.now() + 24 * 60 * 60 * 1000));

    // Save the new book to the database
    const savedBook = await newBook.save();

    res.status(201).json({ referenceId: referenceId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
