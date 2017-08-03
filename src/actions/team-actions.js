import * as types from './action-types';

export const addTeam = (team) => {
  return {
    type: types.ADD_TEAM,
    team
  };
}