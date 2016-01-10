import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Wrapper to catch errors during development with the help of the react-redbox transformer.
 */
const Root = React.createClass({
  render() {
    const App = require('pages/App').default;
    return (
      <App {...this.props}/>
    );
  },
});

ReactDOM.render(<Root />, document.getElementById('main'));
