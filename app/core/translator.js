/**
 * Translator interface.
 */
import i18next from './translator/i18next';

import resources from '../constants/lang/index';

const lng = i18next.language;

i18next.init({
  lng,
  resources,
});

export default i18next;
