import React, { useEffect, useState }  from 'react';
import GridSystem from './gridSystem';
import RenderCard from './renderCard';

const BlogCard = () => { 

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async() => {
    const data = await fetch('/getAllBlogs');
    const items = await data.json();
    setItems(items);
  };

  return (
    <div class="container-md pt-5">
      <GridSystem colCount ={3} md={4}>
        { 
          items.map(item=> (RenderCard(item))) 
        }
      </GridSystem>
    </div>
  )
}

export default BlogCard; 