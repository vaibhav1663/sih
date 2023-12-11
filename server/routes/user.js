const express = require("express");

const { addUser } = require("../controllers/user/user");
const router = express.Router();

router.post("/addUser", addUser);

module.exports = router;
