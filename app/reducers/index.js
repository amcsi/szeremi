/**
 * http://rackt.org/redux/docs/basics/Reducers.html
 */
import { combineReducers } from 'redux';

import { routeReducer as routing } from 'redux-simple-router';
import currentLanguage from './currentLanguage';
import resume from './resume';

const reducers = combineReducers({
  currentLanguage,
  routing,
  resume,
});

export default reducers;
