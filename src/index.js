import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route path="/" render={() => <Home />}></Route>
      <Route exact path="/about" render={() => <About />}></Route>
      <Route exact path="/login" render={() => <Login />}></Route>
    </div>
  </Router>,
  document.getElementById('root')
);
