import { CHANGE_LANGUAGE } from '../constants/actions';

function currentLanguage(state = 'en', action) {
  switch (action.type) {
  case CHANGE_LANGUAGE:
    return action.languageCode;
  default:
    return state;
  }
}

export default currentLanguage;
