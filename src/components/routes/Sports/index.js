// src/components/Upload/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import ScoreCard from '../../shared/score-card'

import './style.css';

export default class Sports extends Component {

  handleFileUpload(e){
      const file = e.target.files[0];
      console.log(file.name);
      let data = new FormData();

        data.append('file', file);
        data.append('name', file.name);

        axios.post('/files', data)
            .then(response => console.log(response.status))
            .catch(error => console.log(JSON.stringify(error)));
  }


  render() {
    return (
        <div>
            <h3> Sports!!! </h3>
             <blockquote className="blockquote blockquote-reverse">
                <p className="mb-0">You miss 100% of the shots you never take.</p>
                <footer className="blockquote-footer">Wayne Gretzky<cite title="Source Title">NHL Great</cite></footer>
            </blockquote>
            <ScoreCard> </ScoreCard>
        </div>
    );
  }
}