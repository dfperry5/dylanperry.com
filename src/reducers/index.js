import players from './player-reducer.js';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    players
})

export default rootReducer;