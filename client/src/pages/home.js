import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogCard from '../components/BlogCard'; 
import Navigation from '../components/Navigation';
import SubmitForm from '../components/SubmitForm';
import About from '../pages/about';


function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <BlogCard></BlogCard>
      <SubmitForm></SubmitForm>
    </div>
  );
}

export default Home;