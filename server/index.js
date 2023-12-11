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
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again later",
});
const userRouter = require("./routes/user");
const bookRouter = require("./routes/books");
connectDB();
app.use("/books", limiter, bookRouter);
app.use("/reviewer", limiter);
app.use("/user", limiter, userRouter);

app.listen(5000, () => {
  console.log("Server is runnning..");
});
