import reducers from '../reducers';
import { createStore } from 'redux';

function configureStore(initialState) {
  // Redux dev tools extension.
  const enhancer =
    typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
      window.__REDUX_DEVTOOLS_EXTENSION__() :
      undefined;

  return createStore(reducers, initialState, enhancer);
}

export default configureStore;
