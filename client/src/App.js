import React from 'react';
import BlogCard from './components/BlogCard'
import Navigation from './components/Navigation'
import SubmitForm from './components/SubmitForm'
import Home from './pages/home'
import About from './pages/about'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
