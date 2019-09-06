/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import Page from './app/components/pages/_Page';
import App from './app/components/pages/_App';
import configureStore from './app/core/configureStore';

const store = configureStore(window.state);

export function wrapRootElement({ element }) {
  return <App store={store}>{element}</App>;
}

export const wrapPageElement = ({ element }) => {
  return (
    <Page>
      {element}
    </Page>
  );
};
