const express = require("express");
const router = express.Router();
const Blog = require("../models/blogSchema.js");
const fs = require('fs');
const path = require('path');

router.get('/getsavedpage', function(req, res){
  const text = "";
  const newpath = path.join(__dirname, "../selenium/newfile3.html")
  fs.readFile(newpath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    else {
      const text = data;
      console.log('text is', text);
      console.log('text finished printing');
      res.send(data);
    }
  });
});

router.put("/incrementUpvote", function (req, res) {
  Blog.findById(req.body.id, (error, blog) => {
    if(blog.upvotes != null ){
      blog.upvotes = blog.upvotes + 1;
      blog.save(); 
      res.send("updated"); 
    }
  })
}); 

router.post("/insertBlogYiyuan", function (req, res) {
  const newBlog = new Blog({
    name: req.body.name,
    url: req.body.url,
    upvotes: 0, 
    author: req.body.author,
    comments:[req.body.comment],
  });
  newBlog.save()
  console.log("submited new entry");
  res.redirect(201, '/')
});

// Get all blogs
router.get("/getAllBlogs", function (req, res) {
    Blog.find({})
      .then((blogs) => {
        res.end(JSON.stringify(blogs));
      });
  });


// Get blogs based on tags
router.get("/filters", function (req, res) {
    const query = req.query; // is a json file specifies criterias like {"lgbtq":"Yes", "projectName":"projectName"}
    if (query.name != undefined){
      query.name = '/'+query.name+'/';
    }
    Blog.find(query, function(err, blogs){
        if (err) return console.error(err);
        res.send(blogs);
    })
  });


module.exports = router;