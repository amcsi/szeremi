import acceptLanguage from 'accept-language';
import translations from '../constants/lang';

function calculateInitialState(req) {
  const langCodes = Object.keys(translations);
  acceptLanguage.languages(langCodes);
  const acceptedLanguage = acceptLanguage.get(req.headers['content-encoding']);
  return { acceptedLanguage };
}

export default calculateInitialState;
