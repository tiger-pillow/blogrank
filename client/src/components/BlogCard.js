import React, { useEffect, useState }  from 'react';
import {Card, Button} from 'react-bootstrap';
import GridSystem from './gridSystem';

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

  const renderCard = (item) =>{
    return (
      <Card key={item._id}>
        <Card.Header as="h5">{item.name}</Card.Header>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            the author is {item.author}
            <br></br>
            item id is {item._id}
          </Card.Text>
          <br></br>
          <Button variant="primary">upvotes {item.upvote} </Button>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div class="container-md pt-5">
      <GridSystem colCount ={3}>
        { 
          items.map(item => (renderCard(item))) 
        }
      </GridSystem>
    </div>
  )
}

export default BlogCard; 