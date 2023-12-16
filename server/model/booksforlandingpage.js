const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        books: {
            type: Array,
            required: true,
        },
    },
    {
        collection: "booksforlandingpage",
    }
);

module.exports = model("booksforlandingpage", bookSchema);
