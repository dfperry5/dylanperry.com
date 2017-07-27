import * as types from './action-types';

export const addPerson = (player) => {
  return {
    type: types.ADD_PLAYER,
    player
  };
}