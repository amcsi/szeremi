/**
 * http://rackt.org/redux/docs/basics/Reducers.html
 */
import { combineReducers } from 'redux';

import currentLanguage from './currentLanguage';
import resume from './resume';

const reducers = combineReducers({
  currentLanguage,
  resume,
});

export default reducers;
