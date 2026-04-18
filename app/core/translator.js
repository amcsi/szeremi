/**
 * Translator interface.
 */
import i18next from './translator/i18next';

import resources from '../constants/lang/index';

i18next.init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
