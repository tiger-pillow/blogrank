import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './components.css'

const RenderCard = (item) => {
  if (item.comments != null){
    item.comments.map(oneComment => {
    console.log("one comment is", oneComment);
      });
  }
  return (
    <Card className='Card' key={item._id}>
      <Card.Header as="h5">{item.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          by: {item.author} <br></br>
          comments: <ul> {item.comments.map(oneComment => <li> {oneComment}</li>
            )} </ul>

        </Card.Text> 
          
        <br></br>
        <Button variant="primary">upvotes {item.upvote} </Button>
      </Card.Body>
    </Card>
  )
}

export default RenderCard; 