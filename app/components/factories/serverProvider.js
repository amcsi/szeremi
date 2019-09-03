import PropTypes from 'prop-types';
import React from 'react';
import configureStore from '../../core/configureStore';
import Contexts from '../contexts/Contexts';

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
        children: PropTypes.node.isRequired,
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
