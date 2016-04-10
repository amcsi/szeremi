import React from 'react';
import configureStore from '../../core/configureStore';
import Contexts from '../pages/Contexts';

/**
 * Returns the root context to use on the server-side.
 *
 * @param initialState
 */
function serverProvider(initialState) {
  const store = configureStore(initialState);
  return class extends React.Component {
    static propTypes() {
      return {
        children: React.PropTypes.node.isRequired,
      };
    }

    render() {
      return (
        <Contexts store={store}>
          { this.props.children }
        </Contexts>
      );
    }
  };
}

export default serverProvider;
