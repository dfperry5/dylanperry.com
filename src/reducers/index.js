import players from './player-reducer.js';
import teams from './team-reducer.js';

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    players, 
    teams
})

export default rootReducer;