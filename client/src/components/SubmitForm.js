import React, { useEffect, useState } from 'react';

const SubmitForm = () => {
  const [name, setName] = useState('');
  const nameUpdate = (event) => { 
    setName(event.target.value)
  }
  return (
    <div class="container-md py-600">
      <h3>Submit a Blog Suggestion</h3>
      <form method="POST" action="/insertBlogYiyuan">
        <div class="mb-3">
          <label class="form-label"> Blog Name </label>
          <input name="name" class="form-control" type="text" placeholder="XXX's site..."></input>
        </div>

        <div class="mb-3">
          <label class="form-label"> Blog URL </label>
          <input name="URL" class="form-control" type="text" placeholder='google.com...'></input>
        </div>

        <div class="mb-3">
          <label class="form-label"> Author </label>
          <input name="author" class="form-control" type="text" placeholder='Jane Doe...'></input>
        </div>

        <div class="mb-3">
          <label> Reasons for recommending this blog </label>
          <textarea class="form-control" name="comment" rows="3" placeholder="I like it because..."></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SubmitForm; 