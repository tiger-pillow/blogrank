import React, { useState } from 'react';
import axios from 'axios';
import { response } from 'express';

const SubmitForm = () => {

  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState([]); 
 
  const submitForm = () => {
    console.log("name is ", name);
    axios.post('https://blogrank.herokuapp.com/insertBlogYiyuan', {
      name: name, 
      url: url, 
      author: author,
      upvotes:0, 
      comment: [comment]
    })
      .then((response)=>{
        if (response == 200){
          axios.post('https://blogrank.herokuapp.com/insertBlogYiyuan', {
            name: name,
            url: url,
            author: author,
            upvotes: 0,
            comment: [comment]
          })
        }
      })
      .catch(() => { 
        console.log("ERR in new submit form")
        })
  }
  return (
    <div class="container-md py-600">
      <form >
        <div class="mb-3">
          <label class="form-label"> Blog Name </label>
          <input class="form-control" type="text" onChange = {(event) => setName(event.target.value)}placeholder="Jane's site...."></input>
        </div>

        <div class="mb-3">
          <label class="form-label"> Blog URL </label>
          <input class="form-control" type="text" onChange={(event) => setURL(event.target.value)} placeholder='google.com'></input>
        </div>

        <div class="mb-3">
          <label class="form-label"> Author </label>
          <input class="form-control" type="text" onChange={(event) => setAuthor(event.target.value)} placeholder='Jane Doe..'></input>
        </div>

        <div class="mb-3">
          <label> Reasons for recommending this blog haha </label>
          <textarea name="comments" class="form-control" onChange={(event) => setComment(event.target.value)}   rows="3" placeholder="I like it because..."></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary" onClick={()=>{submitForm()}}>Submit</button> 
      </form>
    </div>
  )
}

export default SubmitForm; 