const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app = express();
const connectDB = require("./config/connectDB");
const cors = require("cors");
app.use(cors());
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
    max: 11111111111
});
const userRouter = require("./routes/user");
const bookRouter = require("./routes/books");
const authorRouter = require("./routes/author");
const reviewerRouter = require("./routes/reviewer");
const adminRouter = require("./routes/admin");

connectDB();
app.use("/books", limiter, bookRouter);
app.use("/author", limiter, authorRouter);
app.use("/reviewer", limiter, reviewerRouter);
app.use("/user", limiter, userRouter);
app.use("/admin", limiter, adminRouter);

app.listen(5000, () => {
    console.log("Server is runnning..");
});
