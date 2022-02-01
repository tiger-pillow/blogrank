import React, { useEffect, useState } from 'react';
import GridSystem from './gridSystem';
import { Card, Button } from 'react-bootstrap';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './components.css'
import axios from 'axios';

const BlogCard = () => {
  const [items, setItems] = useState([]);
  console.log("original items is", items);
  const [upvotes, setUpvotes] = useState([]); 

  useEffect(() => { // get the list of cards to Items
    axios.get("http://localhost:4000/getAllBlogs")
      .then((response) => {
        setItems(response.data)
        console.log("items", items);
      })
      .catch(() => {
        console.log('ERR inside useEffect');
      });
  }, [1]); 

  const upVote = (id) => {
    console.log("inside upVote function", id);
    axios.put('http://localhost:4000/incrementUpvote', { id: id })
      .then(()=>{
        console.log("updated vote, not refreshing yet")
    })
  }

  const makeCard = (item) => {
    console.log("inside makeCard, item is", item);
    return(
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
          <Button onClick={() => { upVote(item._id) }}> <ThumbUpIcon /> Like! </Button>
        </Card.Body>
      </Card>
    )
  }

  return (
      <div>
        <GridSystem>
          {
            items.map((item) => {
              console.log("inside the return hahaha")
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
                    <Button onClick={() => { upVote(item._id) }}> <ThumbUpIcon /> Like! </Button>
                  </Card.Body>
                </Card>
              )
            })
          }
        </GridSystem>
      </div>
  )
}

export default BlogCard; 