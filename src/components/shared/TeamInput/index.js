import React, { PropTypes, Component } from 'react';

class PlayerInput extends Component {
  constructor(props){
    super(props);
    this.addTeamClick = this.addTeamClick.bind(this);
  }

  addTeamClick(){
    const teamName = document.getElementById('teamName');
    const leagueName = document.getElementById('leagueName');
    const year = document.getElementById('year');
    this.props.addTeam({
      teamName: teamName.value,
      leagueName: leagueName.value,
      year: year.value
    });
  }

  render(){
    return (
      <div>
        <input id="teamName" type="text" placeholder="Team Name" />
        <input id="leagueName" type="text" placeholder="League Name" />
        <input id="year" type="text" placeholder="2017" />
        <button onClick={this.addTeamClick}>Add Team</button>
      </div>
    );
  }
}

PlayerInput.propTypes = {
 addTeam: PropTypes.func.isRequired
};

export default PlayerInput;