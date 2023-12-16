const booksforlandingpage = require("../../model/booksforlandingpage");
exports.getTopPicks = async (req, res) => {
    try {
        const allBooks = await booksforlandingpage.find({});
        let data = [];
        allBooks.forEach((obj) => {
            let books = [];
            obj.books.forEach((book) => {
                books.push({
                    name: book.volumeInfo.title,
                    desc: book.volumeInfo.description,
                    imageLink: book.volumeInfo.imageLinks.medium,
                });
            });

            data.push({
                _id: obj._id,
                type: obj.type,
                books: books,
            });
        });
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
