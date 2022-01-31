const express = require("express");
const router = express.Router();
const Blog = require("../models/blogSchema.js");


router.put("/incrementUpvote", function (req, res) {
  console.log("number:", req.body.id);
  Blog.findById(req.body.id, (error, blog) => {
    console.log(blog.upvotes);
    if(blog.upvotes != null ){
      blog.upvotes = blog.upvotes + 1;
      console.log("hahaha", blog.upvotes)
      blog.save(); 
      res.send("updated"); 
    }
  })
  
}); 

// increase upvotes counter
router.put("/increaseUpvotes/:id", function (req, res) {
  Blog.findOneAndUpdate({ _id: req.params.id }, req.body.upvotes).then(function (blog) {
    Blog.findOne({ _id: req.params.id }).then(function (blog) {
      res.send(blog);
    });
  });
});


router.post("/insertBlogYiyuan", function (req, res) {
  const newBlog = new Blog({
    name: req.body.name,
    url: req.body.url,
    upvotes: 0, 
    author: req.body.author,
    comments:[req.body.comment],
  });
  newBlog.save();
  res.redirect("/submitForm");
 
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