import { CHANGE_LANGUAGE } from '../actions/actions';

function currentLanguage(state = 'en', action) {
  switch (action.type) {
  case CHANGE_LANGUAGE:
    return action.languageCode;
  default:
    return state;
  }
}

export default currentLanguage;
