import React from 'react';
import BlogCard from './components/BlogCard'
import Navigation from './components/Navigation'


function Home(){
  return (
    <div>
      <Navigation></Navigation>
      <BlogCard></BlogCard>
    </div>
  );
}

export default Home;