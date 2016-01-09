/**
 * http://rackt.org/redux/docs/basics/Reducers.html
 */
import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import currentLanguage from './currentLanguage';

const reducers = combineReducers({
  currentLanguage,
  routing,
});

export default reducers;
