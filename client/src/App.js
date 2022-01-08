import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BlogSubmission from './BlogSubmission';
import SignUp from './UserAuth/SignUp';
import LogIn from './UserAuth/LogIn';
import About from './About';

function App(){
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/submitBlog" element={<BlogSubmission/>}/>
          <Route path = "/login" element={<LogIn/>}/>
          <Route path = "/signup" element={<SignUp/>}/>
          <Route path = "/about" element={<About/>}/>
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
