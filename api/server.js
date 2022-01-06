const express = require('express');
const bodyParser = require('body-parser');
const blogRoute = require('./routes/blog.js');
const mongoose = require('mongoose');

require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 4000;

// DB connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});