import React, { useEffect, useState }  from 'react';
import {Card, Button} from 'react-bootstrap';

const BlogCard = () => { 
  useEffect(() => {
    fetchBlogs();
  }, []);

  const [items, setItems] = useState([]);

  const fetchBlogs = async() => {
    const data = await fetch('/getAllBlogs');
    const items = await data.json();
    console.log("fetched data");
    setItems(items);
  };

  return (
    <div>
      { items.map(item => (
        <Card>
          <Card.Header as="h5">{item.name}</Card.Header>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              the author is {item.author}
            </Card.Text>
            <br></br>
            <Button variant="primary">upvotes {item.upvote} </Button>
          </Card.Body>
        </Card>
        ))
      }
    </div>
  )
}

export default BlogCard; 