import React from 'react';
import BlogCard from './components/BlogCard'
import Navigation from './components/Navigation'
import SubmitForm from './components/SubmitForm'
import Home from './pages/home'
import about from './pages/about'; 
import { Router, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
