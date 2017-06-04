// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';

export default class AboutMeRowReverse extends Component {

  render() {
    return (
      <div>
        <div className="row">
            <div className="col-5">
                <blockquote className="blockquote blockquote-reverse">
                    <p className="mb-0">{this.props.quote.text}</p>
                    <footer className="blockquote-footer">{this.props.quote.author} <cite title="Source Title">{this.props.quote.source}</cite></footer>
                </blockquote>
                <p className="lead">
                    {this.props.post.lead}
                </p>
                <p>
                    {this.props.post.text}
                </p>
            </div>
             <div className="col-4">
                <h1> {this.props.title} </h1>
                <img className="img-fluid" src={this.props.img}/>
            </div>
        </div>
    </div>


    );
  }
}