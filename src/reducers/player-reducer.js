import * as types from '../actions/action-types';

export default (state = [], action) => {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case types.ADD_PLAYER:
      console.log("Into add Player");
      return [...state, Object.assign({}, action.player)];
    default:
      return state;
  }
};