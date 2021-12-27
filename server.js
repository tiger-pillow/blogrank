const express = require('express'),
app = express()
const MongoClient = require("mongoose");
const cors = require("cors");

require('dotenv').config()

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://tma8:123456public1998@cluster0.nrnmc.mongodb.net/newblog?retryWrites=true&w=majority";
//Connect to MongoDB

async function main(){

    await MongoClient.connect(uri, function(err, db){
        console.log("Connected to database...")
        const blogs = [
            { name: 'Wait but Why', url: 'https://waitbutwhy.com/', author: "N/A", tags: ["Random"], image: null, comments: []},
        ];
        db.collection("blogs").insertMany(blogs)
    });
    // await client.close();
}

main().catch(console.error);


/*
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
  .then(function (){
      console.log("Connected to database...")
        const blogs = [
            { name: 'Paul Graham', url: 'http://www.paulgraham.com/', author: "Paul Graham"},
        ];
        db.Collection("blogs").insertMany(blogs)
    }
    )
  .catch((err) => console.log(err));*/


app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

// api routes and paths
const blog = require("./routes/blog");
app.use("/api/blog", blog);

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})
