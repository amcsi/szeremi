/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import App from './app/components/pages/App';
import configureStore from './app/core/configureStore';

const store = configureStore(window.state);

export function wrapRootElement({ element }) {
  return <App store={store}>{element}</App>;
}
