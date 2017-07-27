import React, { PropTypes, Component } from 'react';

class PlayerInput extends Component {
  constructor(props){
    super(props);
    this.addPlayerClick = this.addPlayerClick.bind(this);
  }

  addPlayerClick(){
    const firstNameElement = document.getElementById('firstname');
    const lastNameElement = document.getElementById('lastname');
    this.props.addPlayer({
      firstname: firstNameElement.value,
      lastname: lastNameElement.value
    });
  }

  render(){
    return (
      <div>
        <input id="firstname" type="text" placeholder="First Name" />
        <input id="lastname" type="text" placeholder="Last Name" />
        <button onClick={this.addPlayerClick}>Add Player</button>
      </div>
    );
  }
}

PlayerInput.propTypes = {
 addPlayer: PropTypes.func.isRequired
};

export default PlayerInput;