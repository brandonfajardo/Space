import { combineReducers } from 'redux';
import spacesReducer from './spaces'

const rootReducer = combineReducers({
    spaces: spacesReducer
});

export default rootReducer;
