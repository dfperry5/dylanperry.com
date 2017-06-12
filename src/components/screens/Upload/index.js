// src/components/Upload/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';

import './style.css';

export default class Upload extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
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
        <label className="btn btn-primary">
            Browse <input type="file" onChange={this.handleFileUpload}  hidden />
        </label>
    );
  }
}