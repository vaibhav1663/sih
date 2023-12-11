const express = require("express");
const { test } = require("../controllers/user/test");
const { addUser } = require("../controllers/user/user");
const router = express.Router();

router.post("/addUser", addUser);
router.get("/test", test);
module.exports = router;
