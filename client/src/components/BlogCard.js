import React from 'react';
import {Card, Button} from 'react-bootstrap';

const BlogCard = () => { 
  return (
    <div>
      <Card>
        <Card.Header as="h5">Paul Graham's blog</Card.Header>
        <Card.Body>
          <Card.Title>Writings about startups and life</Card.Title>
          <Card.Text>
            some other introduction   .
          </Card.Text>
          <br></br>
          <Button variant="primary">Go Paul Graham's blog </Button>
        </Card.Body>
      </Card>

    </div>
  )
}

export default BlogCard; 