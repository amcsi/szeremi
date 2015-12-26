/**
 * Translator interface.
 */
import i18next from 'i18next/lib/index';

import resources from '../constants/lang/index';

console.info('resources', resources);

i18next.init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
});

export default i18next;
