const express = require("express");
const router = express.Router();
const Blog = require("../models/blogSchema.js");
const Link = require("../models/linkSchema.js");
const fs = require('fs').promises;
const path = require('path');
const { Builder, By, Key, until } = require('selenium-webdriver');
let counter = 0; 

const load_and_save_html = async (data) =>{
  let driver = await new Builder().forBrowser('chrome').build();
  const filename = 'URL_file' + counter;

  /* load selenium web driver and save file */
  try{
    await driver.get(data); 
    const pageSource = await driver.getPageSource();

    fs.writeFile(filename, pageSource, function (err) {
      if (err) {
        return console.log(err);
      }
      counter = counter + 1
    });
  }
  catch(err) {
    console.log("load_and_save_html function problem")
  }
  finally{
    await driver.quit();
    return filename; 
  }
  
}

/* get links from the user, generate and save html files, read and return files */
router.post('/sendlinks', async function (req, res) {
  const newLink = new Link({
    url1: req.body.url1,
    url2: req.body.url2,
  })
  newLink.save()
 
  const name1 = "../" + await load_and_save_html(req.body.url1);
  const name2 = "../" + await load_and_save_html(req.body.url2);

  /* read saved file and respond */
  const file0path = path.join(__dirname, name1)
  const file1path = path.join(__dirname, name2)
  let file0 = "";
  let file1 = "";

  fs.readFile(file0path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    else {
      //console.log("test if read successful", data);
      file0 = data;
      return
    }
  });

  fs.readFile(file1path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return
    }
    else {
      file1 = data;
      return
    }
  });

 async function helperfunction (file0path, file1path){ 
   try{
     file0 = await fs.readFile(file0path, 'utf8')
     file1 = await fs.readFile(file1path, 'utf8')
   }
   catch(err){
      console.log ("error in loading file", err);
   }
   finally{
    res.send([file0, file1]);
   }
 }
   
  helperfunction(file0path, file1path);

})


///////////////////////// links regarding blog  //////////////////////////
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