import { combineReducers } from 'redux';
import cities from './cityReducer';
import weather from './weatherReducer';

const rootReducer = combineReducers({
  cities,
    weather
});

export default rootReducer;
