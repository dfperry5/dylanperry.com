// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import NCState from './NCState.jpg'
import Finley from './finley.jpg';
import Family from './family.JPG';
import Ariel from './DylanRelWedding.jpg'
import DylanHS from './DylanHeadshot.jpg'
import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>

        <div className="container">
            <div className="container-fluid">
              <h1> About <img className="headshot" src={DylanHS} /> Me: </h1>
            </div>
            <br /> <br />
            <div className="row">
              <div className="col-4">
                <h1> Family </h1>
                <img className="img-fluid" src={Family}/>
                </div>
              <div className="col-5">
                <blockquote className="blockquote blockquote-reverse">
                  <p className="mb-0">"But as for me and my house, we will serve the Lord.”</p>
                  <footer className="blockquote-footer">Joshua 24:15 <cite title="Source Title">The Bible (ESV)</cite></footer>
                </blockquote>
                <p className="lead">
                  June 19 1993 - the day my parents lives got immeasurebly better.
                </p>
                <p>
                  I'm from the small town of Bunn, North Carolina. I was blessed with the most supporting family anyone could ask for. Without them, I wouldn't be half the person I am today. They taught me how to love, how to follow God, and how to be a man. I really do owe everything I have and everything I am to the lessons they taught me.
                </p>
              </div>
            </div>

          <hr />

          <div className="row">
            <div className="col-5">
              <blockquote className="blockquote blockquote-reverse">
                <p className="mb-0">For the strength of the pack is the wolf, and the strength of the wolf is the pack.</p>
                <footer className="blockquote-footer">Rudyard Kipling <cite title="Source Title">Law of the Jungle</cite></footer>
              </blockquote>
              <p className="lead">
                I graduated Magna Cum Laude from NC State in May 2015, with a B.S. in Computer Science.
              </p>
              <p>
                A little more than 4 years before then, I fell in love with everything about the campus and the school. While there, I joined the fraternity Delta Kappa Epsilon where I made some life long friends. One of my favorite things in life is getting together with friends to watch Wolfpack football.  
              </p>
            </div>
            <div className="col-4">
              <h1> NC State </h1>
              <img className="img-fluid" src={NCState}/>
            </div>
          </div>

          <hr /> 

          <div className="row">
              <div className="col-4">
                <h1> Ariel </h1>
                <img className="img-fluid" src={Ariel}/>
                </div>
              <div className="col-5">
                <blockquote className="blockquote blockquote-reverse">
                  <p className="mb-0">"Some people are worth melting for.”</p>
                  <footer className="blockquote-footer">Olaf the Snowman <cite title="Source Title">Frozen</cite></footer>
                </blockquote>
                <p className="lead">
                  September 19th, 2015 is where this story began.
                </p>
                <p>
                  It really began a little before that -- but I'll leave that part to your imagination. I am so lucky to have the most supporting, wonderful, beautiful, and most insane girlfriend in the world.
                </p>
              </div>
            </div>

          <hr />
          
          <div className="row">
            <div className="col-5">
              <blockquote className="blockquote blockquote-reverse">
                <p className="mb-0">"Happiness is a warm puppy.”</p>
                <footer className="blockquote-footer">Charles Shultz <cite title="Source Title">Peanuts Cartoons</cite></footer>
              </blockquote>
              <p className="lead">
                On July 4th 2016, my life improved immensely.
              </p>
              <p>
                We adopted our puppy - Finley Forest Tipton-Perry. He has brought me so much joy, and taught me so much about what responsibility really is. He's and essential and crucial part of our family. Obviously, I'm a dog person.
              </p>
            </div>
            <div className="col-4">
              <h1> Finley </h1>
              <img className="img-fluid" src={Finley}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}