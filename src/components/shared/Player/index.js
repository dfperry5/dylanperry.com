import React, {PropTypes} from 'react';

const Player = ({person}) => {
  return (
    <div>
      {person.lastname}, {person.firstname}
    </div>
  );
};

Player.propTypes = {
  person: PropTypes.object.isRequired
};

export default Player;