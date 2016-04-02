import React from 'react';
import HomePage from '../components/pages/HomePage';
import Resume from '../components/pages/Resume';
import About from '../components/pages/About';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

const routes = (
  <Router>
    <Route path="/">
      <IndexRoute component={HomePage} />
      <Route path="cv" component={Resume} />
      <Route path="about" component={About} />
      <Redirect from="resume" to="cv" />
    </Route>
  </Router>
);

export default routes;
