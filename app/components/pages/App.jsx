import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Contexts from './../contexts/Contexts';

import 'font-awesome/scss/font-awesome.scss';
import './App.scss';
import Page from './Page';

class App extends React.Component {
  static propTypes() {
    return {
      store: PropTypes.object,
      history: PropTypes.object,
    };
  }

  render() {
    const { store } = this.props;

    return (
      <Contexts store={store}>
        <BrowserRouter>
          <Page />
        </BrowserRouter>
      </Contexts>
    );
  }
}

export default App;
