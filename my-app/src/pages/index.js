import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Layout from '../components/Layout'; 

const Pages = () => {
  <Router>
    <Layout>
      <h1>try if index in pages work </h1>
      <Route exact path = "/home" component={Home}/>
    </Layout>
  </Router> 
}

export default Pages; 