/**
 * http://rackt.org/redux/docs/basics/Reducers.html
 */
import { combineReducers } from 'redux';
import { CHANGE_LANGUAGE } from '../actions/actions';

function currentLanguage(state = 'en', action) {
  switch (action.type) {
  case CHANGE_LANGUAGE:
    return action.languageCode;
  default:
    return state;
  }
}

const reducers = combineReducers({
  currentLanguage,
});

export default reducers;
