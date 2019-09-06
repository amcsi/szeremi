import React from 'react';
import App from './app/components/pages/App';
import calculateInitialState from './app/core/calculateInitialState';
import configureStore from './app/core/configureStore';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

export const wrapRootElement = ({ element }) => {
  const initialState = calculateInitialState();
  const store = configureStore(initialState);
  return (
    <App store={store}>{element}</App>
  );
};
