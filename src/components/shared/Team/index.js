import React, {PropTypes} from 'react';

const Team = ({team}) => {
  return (
    <tr>
      <td>{team.teamName}</td>
      <td>{team.leagueName}</td>
      <td>{team.year}</td>
      <td> X </td>
    </tr>
  );
};

Team.propTypes = {
  team: PropTypes.object.isRequired
};

export default Team;