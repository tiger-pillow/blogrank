const { integer } = require("check-types");
const mongoose = require("mongoose");

//schema for projects
const blogSchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    required: true,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  author: {
    type: String,
  },
  tags: {
    type: Array,
  },
  image: {
    type: String,
  },
  upvotes:{
    type: Number,
  },
  comments: {
    type: Array,
  },
});

module.exports = mongoose.model("blogs", blogSchema);