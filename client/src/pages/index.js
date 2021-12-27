import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home';
import Layout from '../components/Layout'; 

const Pages = () => {
  return(
    <Router>
      <div>
        <h1>try if index in pages work </h1>
        <Routes>
          <Route path = "/home" element={<Home/>}/>
        </Routes>
      </div>
    </Router> 
  )
}

export default Pages; 