const mongoose = require("mongoose");

const db =
  "mongodb+srv://username:27bKylHTcLzRZqhf@brocoders.kmwx8fe.mongodb.net/sih";
const connectDB = async () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("We got the MongoDB.");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
