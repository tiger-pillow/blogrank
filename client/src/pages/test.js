import React, { useEffect, useState } from 'react';import axios from 'axios';

const Test = () => {
  const [htmlText, setHtmlText] = useState("");

  useEffect(() => { // get the html from backend
    console.log("inside test");
    axios.get("http://localhost:4000/getsavedpage")
      .then((response) => {
        setHtmlText(response.data);
      })
      .catch(() => {
        console.log('failed to get HTML string / useEffect');
      });
  }, []);


  return (
    <div>
      {htmlText}
      {<div dangerouslySetInnerHTML={{ __html: htmlText }} />}
    </div>
  )
};

export default Test; 

