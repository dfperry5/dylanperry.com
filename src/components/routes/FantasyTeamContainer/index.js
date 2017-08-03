// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';
import * as teamActions from '../../../actions/team-actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TeamList from '../../shared/TeamsList/';
import TeamInput from '../../shared/TeamInput/';
import AWSApiCall from '../../../services/aws/';

class FantasyTeamContainer extends Component {

  constructor(props) {
    super(props)
    AWSApiCall.getDataFromTable('test_fantasy_players')
      .then(data => this.updatePlayerList(data.data))
      .catch(err => alert(JSON.stringify(err)))
      this.state = {
        teams: []  
      };
  }

  updatePlayerList(player){
    alert(JSON.stringify(player));
  }
  
  addTeam(team){
    alert(team.teamName);
    this.props.actions.addTeam(team);
  }

  render() {
    console.log("Rendering");
    const {teams} = this.props;
    return (
        <div>
            <TeamInput addTeam={this.props.actions.addTeam} />
            <TeamList teams={teams} />
        </div>
    );
  }
}

FantasyTeamContainer.propTypes = {
    teams: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    teams: state.teams
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(teamActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyTeamContainer);