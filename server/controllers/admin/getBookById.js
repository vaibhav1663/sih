const book = require("../../model/recommendedBooks");
exports.getBookById = async (req, res) => {
    const { id } = req.body;
    try {
        book.findOne({
            _id: id,
        })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                // console.log(err);
                res.status(500).json({ error: "Book Not found" });
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
