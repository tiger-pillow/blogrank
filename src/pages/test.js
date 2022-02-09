import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap'; 

const Test = () => {
  const [htmlText, setHtmlText] = useState("<h1>waiting for url</h1>");
  const [htmlText1, setHtmlText1] = useState("<h1>waiting for url</h1>");
  const [url1, setUrl1] = useState("http://txti.es/");
  const [url2, setUrl2] = useState("http://txti.es/");

  const submitlinks = async () => { 
    await axios.post('http://localhost:4000/sendlinks', {
      url1: url1,
      url2: url2
    })
    .then((response)=>{
      setHtmlText(response.data[0]);
      setHtmlText1(response.data[1]);
    })
    .catch(()=>{
      console.log("ERR in submit links")
    })
  }

  return (
    <div>

      <div className= "row container border border-primary mx-auto">

        <Card className="col URL-Card">
            <div className="card-body">
              <h5 className="card-title">First URL</h5>
            <input onChange={(event) => setUrl1(event.target.value)} placeholder="http://txti.es/" />
            </div>
        </Card>    

        <Card className="col URL-Card">
            <div className="card-body">
              <h5 className="card-title">Second URL</h5>
            <input onChange={(event) => setUrl2(event.target.value)} placeholder="http://txti.es/" />
          </div>
        </Card>

        <div className="row">
          <button onClick= {submitlinks} className="button col-2 mx-auto btn btn-primary btn-block">Submit</button>
        </div>
      </div>

      <div className='container border border-primary mx-auto'>
        <div className='row '>
          <div className='col w-50' >
            {<div dangerouslySetInnerHTML={{ __html: htmlText }} />}
          </div>

          <div className='col w-50'>
            {<div dangerouslySetInnerHTML={{ __html: htmlText1 }} />}
          </div>
        </div>
    </div>


    </div>
  )
};

export default Test; 

