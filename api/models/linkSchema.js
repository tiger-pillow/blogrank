const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  url1: {type: String}, 
  url2: {type: String}
})

module.exports = mongoose.model("links", linkSchema);