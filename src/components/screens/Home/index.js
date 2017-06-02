// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3 left-align" >Hi, I'm Dylan.</h1>
            <p className="lead">This is my website! It's a page for me to tell the world about myself, share my opinions and cool things I find, a blog, as well as act as a living resume. Please click around, and if you know me, let me know what you think!</p>
          </div>
        </div>
     </div>
    );
  }
}