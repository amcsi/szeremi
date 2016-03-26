import reducers from '../reducers';
import { createStore } from 'redux';

function configureStore(initialState) {
  // Redux dev tools extension.
  const enhancer =
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() :
      undefined;

  return createStore(reducers, initialState, enhancer);
}

export default configureStore;
