import React from 'react';
import Navigation from './components/Navigation'
import SubmitFormPage from './pages/submit_form'
import Home from './pages/home'
import ErrorPage from './pages/error_page'
import About from './pages/about'; 
import Test from './pages/test'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={<About/>}/>
          <Route path="/submitForm" element={<SubmitFormPage/>} />
          <Route path="/ping" element={<Test />} />
          <Route path="*" element = {<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
