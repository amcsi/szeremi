import acceptLanguage from 'accept-language';
import translations from '../constants/lang';

/**
 * Picks the best language from the browser for the available translation set.
 */
export default function getInitialLanguage() {
  const langCodes = Object.keys(translations);
  acceptLanguage.languages(langCodes);
  if (typeof navigator !== 'undefined' && navigator.languages) {
    return acceptLanguage.get(navigator.languages.join(',')) || 'en';
  }
  return 'en';
}
