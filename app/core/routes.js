import HomePage from '../components/pages/HomePage';
import Resume from '../components/pages/Resume';

const routes = {
  path: '/',
  indexRoute: { component: HomePage },
  childRoutes: [
    { path: 'resume', component: Resume },
  ],
};

export default routes;
