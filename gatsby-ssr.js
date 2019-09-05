import React from 'react';
import { StaticRouter } from 'react-router';
import Contexts from './app/components/contexts/Contexts';
import calculateInitialState from './app/core/calculateInitialState';
import configureStore from './app/core/configureStore';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const initialState = calculateInitialState();
const store = configureStore(initialState);

export function wrapRootElement({ element }) {
  return <Contexts store={store}>
    <StaticRouter location={req.url} context={{}}>
      {element}
    </StaticRouter>
  </Contexts>
}
