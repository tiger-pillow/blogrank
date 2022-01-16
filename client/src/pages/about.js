import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Navigation from '../components/Navigation'


const about = () => {

  return (
    <div>
      <Navigation></Navigation>
      <h1>about page</h1>
    </div>
  )
}

export default about; 