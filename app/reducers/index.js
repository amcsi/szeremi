/**
 * http://rackt.org/redux/docs/basics/Reducers.html
 */
import { combineReducers } from 'redux';

import { routerReducer as routing } from 'react-router-redux';
import currentLanguage from './currentLanguage';
import resume from './resume';

const reducers = combineReducers({
  currentLanguage,
  routing,
  resume,
});

export default reducers;
