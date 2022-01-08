const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.js");

// // insert a blog
// router.post("/insertBlog", function (req, res) {
//     console.log("in insert function");
//     console.log(req.body);
//     Blog.create(req.body);
// });

// Insert blog, only added name part 
router.post("/insertBlogYiyuan", function (req, res) {
  const newBlog = new Blog({
    name: req.body.name,
    author: req.body.author,
    url: req.body.URL,
    comment: [req.body.URL]
  });
  newBlog.save();
  console.log(newBlog);
  res.redirect("/");

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

// increase upvotes counter
router.put("/increaseUpvotes/:id", function (req, res){
    Blog.findOneAndUpdate({_id: req.params.id},req.body.upvotes).then(function(blog){
        Blog.findOne({_id: req.params.id}).then(function(blog){
            res.send(blog);
        });
    });
});

module.exports = router;