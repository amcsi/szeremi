import React from 'react';
import HomePage from '../components/pages/HomePage';
import Resume from '../components/pages/Resume';
import {Router, Route} from 'react-router';

const routes = (
  <Router>
    <Route path="/" component={HomePage}>
      <Route path="resume" component={Resume}/>
    </Route>
  </Router>
);

export default routes;
