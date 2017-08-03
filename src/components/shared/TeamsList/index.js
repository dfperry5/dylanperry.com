import React, {PropTypes} from 'react';
import Team from '../Team';
import './style.css';


const TeamsList = ({teams}) => {
  console.log(JSON.stringify(teams));
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="myHeader">Team Name</th>
            <th className="myHeader">League Name</th>
            <th className="myHeader">Year</th>
            <th className="myHeader">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => 
            <Team key={team.name} team={team} />  
          )}
        </tbody>
      </table>
    </div>
  );
};

TeamsList.propTypes = {
  teams: PropTypes.array.isRequired
};

export default TeamsList;