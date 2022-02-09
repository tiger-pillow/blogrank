import React, { useEffect, useState } from 'react';
import GridSystem from './gridSystem';
import { Card, Button } from 'react-bootstrap';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './components.css'
import axios from 'axios';

const BlogCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => { // get the list of cards to Items
    // console.log("inside useEffects");
    axios.get("http://localhost:4000/getAllBlogs")
      .then((response) => {
        setItems(response.data)
      })
      .catch(() => {
        console.log('ERR inside useEffect');
      });
  }, []); 

  const upVote = (id) => {
    axios.put('http://localhost:4000/incrementUpvote', { id: id })
      .then(()=>{
        console.log("increased vpvotes")
        setItems(
          items.map((item) => {
            if (item._id === id){
              item.upvotes = item.upvotes + 1; 
              return item;
            }
            else {
              return item;
            }
            //return item._id == id ? {_id:id, comments: item.comments, upvotes: item.upvotes+1 }: item
          })
        )
      })
      .catch(()=>{
        console.log("Upvote error ");
      })
  }

  const makeCard = (item) => {
    return(
      <Card className='Card' key={item._id}>
        <Card.Header as="h5"><a className="link-secondary" href={"gg"}>{item.name}</a></Card.Header>
        <Card.Body>
          <Card.Text>
            by: {item.author} <br></br>
            comments: <ul> {item.comments.map(oneComment => <li> {oneComment}</li>
            )} </ul>
            upvotes: {item.upvotes}
          </Card.Text>
          <br></br>
          <Button type="button" className='CardButton btn btn-primary' onClick={() => { upVote(item._id) }}> <ThumbUpIcon /> Like! </Button>
          <a href={item.url}><Button type="button" className='CardButton btn btn-primary' > Go to site </Button></a>
        </Card.Body>
      </Card>
    )
  }

  return (
      <div>
        <GridSystem colCount={3} md={4}>
          {
            items.map((item) => {return makeCard(item)})
          }
        </GridSystem>
      </div>
  )
}

export default BlogCard; 

