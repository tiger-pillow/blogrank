import React from 'react';
import Select from 'react-select';
import BlogCard from './components/BlogCard'
import Navigation from './components/Navigation'
import SubmitForm from './components/SubmitForm'
import {Button, Alert} from 'react-bootstrap';


function App(){
  return (
    <div>
      <Navigation></Navigation>
      <BlogCard></BlogCard>
      <SubmitForm></SubmitForm>
    </div>
  );
}

export default App;
