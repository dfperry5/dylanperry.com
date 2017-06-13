// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import DylanHS from '../../../images/DylanHeadshot.jpg'
import './style.css';
// Components
import AboutMeRow from '../../shared/about-me-row'
import AboutMeRowReverse from '../../shared/about-me-row-reverse'

export default class About extends Component {

  constructor() {
    super()
    this.state = {
      family: {
        quote: {
          text: '"But as for me and my house, we will serve the Lord."',
          author: 'Joshua 24:15',
          source: 'The Bible (ESV)'
        },
        image: 'family.jpg',
        title: "Family",
        post: {
          lead: "June 19 1993 - the day my parents' lives got immeasurably better.",
          text: "I'm from the small town of Bunn, North Carolina. I was blessed with the most supporting family anyone could ask for. Without them, I wouldn't be half the person I am today. They taught me how to love, how to follow God, and how to be a man. I really do owe everything I have and everything I am to the lessons they taught me."
        }
      },
      ncState: {
        quote:{
          text: '"For the strength of the pack is the wolf, and the strength of the wolf is the pack.”',
          author: 'Olaf the Snowman',
          source: 'Law of the Jungle',
        },
        image: 'NCState.jpg',
        title: "NC State",
        post: {
          lead: "I graduated Magna Cum Laude from NC State in May 2015, with a B.S. in Computer Science.",
          text: "A little more than 4 years before then, I fell in love with everything about the campus and the school. While there, I joined the fraternity Delta Kappa Epsilon where I made some life long friends. One of my favorite things in life is getting together with friends to watch Wolfpack football."
        }
      },
      ariel: {
        quote:{
          text: '"Some people are worth melting for.”',
          author: 'Rudyard Kipling',
          source: 'Frozen',
        },
        image: 'DylanRelWedding.jpg',
        title: "Ariel",
        post: {
          lead: "September 19th, 2015 is where this story began.",
          text: " It really began a little before that -- but I'll leave that part to your imagination. I am so lucky to have the most supporting, wonderful, beautiful, and insane girlfriend in the world."
        }
      },
      finley: {
         quote:{
          text: '"Happiness is a warm puppy."',
          author: 'Charles Shultz',
          source: 'Peanuts Cartoons',
        },
        image: 'finley.jpg',
        title: "Finley",
        post: {
          lead: "On July 4th 2016, my life improved immensely.",
          text: "We adopted our puppy - Finley Forest. He has brought me so much joy, and taught me so much about what responsibility really is. He's and essential and crucial part of our family. Obviously, I'm a dog person."
        }
      }
    }
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>

        <div className="container">
          <div className="container-fluid">
            <h1> About <img className="headshot" src={DylanHS} /> Me: </h1>
          </div>
          <br /> <br />
            
          <AboutMeRow title={this.state.family.title} img={this.state.family.image} quote={this.state.family.quote} post={this.state.family.post}/>
          <hr />
          <AboutMeRowReverse title={this.state.ncState.title} img={this.state.ncState.image} quote={this.state.ncState.quote} post={this.state.ncState.post}/>
          <hr /> 
          <AboutMeRow title={this.state.ariel.title} img={this.state.ariel.image} quote={this.state.ariel.quote} post={this.state.ariel.post}/>
          <hr />
          <AboutMeRowReverse title={this.state.finley.title} img={this.state.finley.image} quote={this.state.finley.quote} post={this.state.finley.post}/>

        </div>
      </div>
    );
  }
}