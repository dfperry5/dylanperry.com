import React, { Component } from 'react';
import logo from './dylanGolf.jpg';
import './App.css';
import About from './screens/About';
import NotFound from './screens/NotFound'
import Upload from './screens/Upload'
import Home from './screens/Home'
import {
  // NOTE no more browserHistory https://reacttraining.com/react-router/web/api/BrowserRouter
  BrowserRouter as Router,
  Route,
  Link,
  Switch
  // NOTE Hello react-router-dom!
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
          <div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="/">
                <img src={logo} width="35" height="35" alt="" />
                Dylan F. Perry
              </a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="about" className="nav-link" href="#">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/NotFound" className="nav-link disabled" href="#">Not Found</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/upload" component={Upload}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};

export default App;
