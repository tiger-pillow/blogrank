const { integer } = require("check-types");
const mongoose = require("mongoose");

//schema for projects
const userSchema = new mongoose.Schema({
  // host: { type: mongoose.Schema.Types.ObjectId, ref: "Host", required: true, },
  email: { type: String, },
  username: { type: String, },
  password: { type: String, },
});

module.exports = mongoose.model("users", userSchema);