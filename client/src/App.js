import logo from './logo.svg';
import './App.css';
import Pages from './pages/index';
import React from 'react';
import Select from 'react-select';

class App extends React.Component {
  render(){
    let tags = [
      {value: "Startups", label: "Startups"},
      {value: "Founder", label: "Founder"},
      {value: "Technology", label: "Technology"},
      {value: "Attitude", label: "Attitude"},
      {value: "Random", label: "Random"},
      {value: "Programming", label: "Programming"},
      {value: "Politics", label: "Politics"},
      {value: "Editor's Pick", label: "Editor's Pick"},
      {value: "Self Help", label: "Self Help"},
    ];

    return (
      <main>
        <div className="App">
          <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
              <div class="container px-5">
                  <a class="navbar-brand" href="#page-top">Blog App</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                      <ul class="navbar-nav ms-auto">
                          <li class="nav-item"><a class="nav-link" href="#page-top"> Home </a></li>
                          <li class="nav-item"><a class="nav-link" href="#suggestionPage" target="_blank">Give a Suggestion</a></li>
                          <li class="nav-item"><a class="nav-link" href="#footer"> Contact </a></li>
                          <li class="nav-item"><a class="nav-link" href="#suggestionPage" target="_blank">Log In</a></li>
                      </ul>
                  </div>
              </div>
          </nav>

          <header class="head">
            <h1 class="text masthead-heading">Blog App</h1>
          </header>

          <Select isMulti name="colors" options={tags} className="select-tag" />
          <div class="blog">
            <div id="nameAndTags">
              <div class="blogName">
                <p class="blogName-text">Paul Graham's Blog</p>
              </div>
              <div class="blogTags">
                <div class="blogTag"><p>Startups</p></div>
                <div class="blogTag"><p>Technology</p></div>
                <div class="blogTag"><p>Attitude</p></div>
                <div class="blogTag"><p>Art</p></div>
                <div class="blogTag"><p>Editor's Pick</p></div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div id="nameAndTags">
              <div class="blogName">
                <p class="blogName-text">Wait but Why</p>
              </div>
              <div class="blogTags">
                <div class="blogTag"><p>Random</p></div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div id="nameAndTags">
              <div class="blogName">
                <p class="blogName-text">Naval</p>
              </div>
              <div class="blogTags">
                <div class="blogTag"><p>Founder</p></div>
                <div class="blogTag"><p>Technology</p></div>
                <div class="blogTag"><p>Editor's Pick</p></div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div id="nameAndTags">
              <div class="blogName">
                <p class="blogName-text">Ideas to Change Your Life</p>
              </div>
              <div class="blogTags">
                <div class="blogTag"><p>Self Help</p></div>
                <div class="blogTag"><p>Editor's Pick</p></div>
              </div>
            </div>
          </div>
          </div>
      </main>
    );
  }
}

export default App;
