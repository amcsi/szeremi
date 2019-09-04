import React from 'react';
import HomePage from '../components/pages/HomePage';
import Page from '../components/pages/Page';
import Resume from '../components/organisms/Resume';
import About from '../components/pages/About';
import { Route, Redirect } from 'react-router-dom';

const Routes = (
  <Route path="/" component={Page}>
    <Route exact component={HomePage} />
    <Route path="cv" component={Resume} />
    <Route path="about" component={About} />
    <Redirect from="resume" to="cv" />
  </Route>
);

export default Routes;
