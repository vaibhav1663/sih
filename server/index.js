const express = require("express");
const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");
const app = express();
const connectDB = require("./config/connectDB");
const cors = require("cors");
app.use(cors());
app.use(helmet());
app.use(express.json());

const userRouter = require("./routes/user");
const bookRouter = require("./routes/books");
const authorRouter = require("./routes/author");
const reviewerRouter = require("./routes/reviewer");
const adminRouter = require("./routes/admin");
const bardRouter = require("./routes/bard");
const plagiarism = require("./routes/plagiarism");

connectDB();
app.use("/books", bookRouter);
app.use("/author", authorRouter);
app.use("/reviewer", reviewerRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/bard", bardRouter);
app.use("/plagiarism", plagiarism);

app.listen(5000, () => {
  console.log("Server is runnning..");
});
