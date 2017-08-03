// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';
import * as playerActions from '../../../actions/player-actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayersList from '../../shared/PlayersList/';
import PlayerInput from '../../shared/PlayerInput/';
import AWSApiCall from '../../../services/aws/'
class FantasyContainer extends Component {

  constructor(props) {
    super(props)
    AWSApiCall.getDataFromTable('test_fantasy_players')
      .then(data => this.updatePlayerList(data.data))
      .catch(err => alert(JSON.stringify(err)))
      this.state = {
        players: []  
      };
  }

  updatePlayerList(player){
    alert(JSON.stringify(player));
  }
    

  render() {
    const {players} = this.props;
    return (
        <div>
            <PlayerInput addPlayer={this.props.actions.addPerson} />
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