import * as types from '../actions/action-types';

export default (state = [], action) => {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case types.ADD_TEAM:
      console.log("Into Add Team")
      return [...state, Object.assign({}, action.team)];
    default:
      return state;
  }
};