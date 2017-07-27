import React, {PropTypes} from 'react';
import Player from '../Player';

const PlayersList = ({players}) => {
  console.log(players);
  return (
    <div>
      {players.map((person) => 
        <Player key={person.lastname} person={person} />  
      )}
    </div>
  );
};

PlayersList.propTypes = {
  players: PropTypes.array.isRequired
};

export default PlayersList;