import React, { handleChange, handleSubmit } from 'react';

const SubmitForm = () => {
  super(props);
  this.state = { value: '' };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange =(event) => {
  this.setState({ value: event.target.value });
}

handleSubmit = (event) => {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

  return (
    <div class="container-md py-600">
      <form method="POST" action="/insertBlogYiyuan">
        <div class="mb-3">
          <label class="form-label"> Blog Name </label>
          <input class="form-control" type="text" name="name" placeholder="Jane's site...."></input>
        </div>

        <div class="mb-3">
          <label class="form-label"> Blog URL </label>
          <input class="form-control" type="text" name="url" placeholder='google.com'></input>
        </div>

        <div class="mb-3">
          <label class="form-label"> Author </label>
          <input class="form-control" type="text" name="author" placeholder='Jane Doe..'></input>
        </div>

        <div class="mb-3">
          <label> Reasons for recommending this blog </label>
          <textarea name="comments" class="form-control"  rows="3" placeholder="I like it because..."></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button> 
      </form>
    </div>
  )
}

export default SubmitForm; 

// can be useful: 
//onClick={() => { useNavigate("/") }}  