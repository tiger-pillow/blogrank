const express = require('express');
const bodyParser = require('body-parser');
const blogRoute = require('./routes/blog.js');
const userRoute = require('./routes/user.js');
const mongoose = require('mongoose');
const cors = require("cors");

require('dotenv/config');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', blogRoute);
app.use('/api/', userRoute);
const PORT = process.env.PORT || 4000;

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://tma8:123456public1998@cluster0.nrnmc.mongodb.net/newblog?retryWrites=true&w=majority";

// DB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});