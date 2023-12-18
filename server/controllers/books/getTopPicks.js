const booksforlandingpage = require("../../model/booksforlandingpage");
function convertUrl(originalUrl) {
    // Extract the book ID from the original URL
    const bookIdRegex = /id=([^&]+)/;
    const match = originalUrl.match(bookIdRegex);
    const bookId = match ? match[1] : null;

    if (bookId) {
        // Create a new URL with the extracted book ID
        const newUrl = `https://books.google.com/books/publisher/content?id=${bookId}&printsec=frontcover&img=1&zoom=3&edge=curl`;
        return newUrl;
    } else {
        console.log("Unable to extract book ID from the URL");
        return originalUrl;
    }
}

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
                    imageLink: convertUrl(book.volumeInfo.imageLinks.medium),
                    link: book.volumeInfo.previewLink
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
