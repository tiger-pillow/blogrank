const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

// Insert blog, only added name part 
router.post("/signup", function (req, res) {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  user.save();
  console.log(user);
});

module.exports = router;