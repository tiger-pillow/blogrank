import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './components.css'
import axios from 'axios';

const RenderCard = (item) => {
 // const [upvotes, setUpvotes] = useState({upvotes: item.upvotes});
  const ClickRouteChange = (id) => {
    console.log("inside route change function", id);
    axios.put('http://localhost:4000/incrementUpvote', {id: id}).then(()=>{
      console.log("inside then")
    })
  }

  return ( 
    <Card className='Card' key={item._id}>
      <Card.Header as="h5">{item.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          by: {item.author} <br></br>
          comments: <ul> {item.comments.map(oneComment => <li> {oneComment}</li>
            )} </ul>
          upvotes: {item.upvotes}
        </Card.Text> 
        <br></br>
        <Button onClick = {() => {ClickRouteChange(item._id)}}> <ThumbUpIcon/> Like! </Button>
      </Card.Body>
    </Card>
  )
}

export default RenderCard; 