import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import NotFound from './NotFound'
import Home from './Home'
import {
  // NOTE no more browserHistory https://reacttraining.com/react-router/web/api/BrowserRouter
  BrowserRouter as Router,
  Route,
  Link
  // NOTE Hello react-router-dom!
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/NotFound">NotFound</Link></li>
            </ul>
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
              </div>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="*" component={NotFound}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
