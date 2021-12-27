const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

// Get all projects
router.get("/insertBlog", function (req, res) {
    Blog.insertOne(req.body)
});

module.exports = router;