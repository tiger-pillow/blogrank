import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation'

const LogIn = () => {
  return (
      <div>
          <Navigation></Navigation>
            <div class="container-md py-600">
            <h3>Log In/Sign Up</h3>

            <form method="GET" action="/api/login">
                <div class="mb-3">
                <label class="form-label"> Email </label>
                <input name="name" class="form-control" type="text" placeholder="xyz@gmail.com"></input>
                </div>

                <div class="mb-3">
                <label class="form-label"> Password </label>
                <input name="URL" class="form-control" type="password" placeholder='******'></input>
                </div>

                <button type="submit" class="btn btn-primary">Log In</button>
            </form>
            <p><a href="/signup">Don't have an account? Create one here.</a></p>
            </div>
      </div>
    
  )
}

export default LogIn; 