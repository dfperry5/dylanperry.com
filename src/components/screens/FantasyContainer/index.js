// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import * as playerActions from '../../../actions/player-actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayersList from '../PlayersList/';

import './style.css';

class FantasyContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: []  
    };
     this.onAddPlayerClick = this.onAddPlayerClick.bind(this);
  };


  onAddPlayerClick(){
    const firstNameElement = document.getElementById('firstname');
    const lastNameElement = document.getElementById('lastname');
    
    const player = {
        firstname: firstNameElement.value,
        lastname: lastNameElement.value
    }
    this.props.actions.addPerson(player);
  }

  render() {
    const {players} = this.props;
    return (
        <div>
            <input id="firstname" type="text" placeholder="First Name" />
            <input id="lastname" type="text" placeholder="Last Name" />
            <button onClick={this.onAddPlayerClick}>Add Person</button>
            <PlayersList players={players} />
        </div>
    );
  }
}

FantasyContainer.propTypes = {
    players: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    players: state.players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(playerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyContainer);