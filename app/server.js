const express = require('express');
const path = require('path');
const { renderToString } = require('react-dom/server');
const routes = require('./core/routes');
const { match, RouterContext } = require('react-router');
const fs = require('fs');
const React = require('react');
import * as history from 'history';
// Component stuff.
import reducers from './reducers';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next/lib';
import { createStore } from 'redux';
import i18next from './core/translator';

/*
// Enable sourcemaps in node.
// Load in SourceMapIndexGenerator
const generator = new SourceMapIndexGenerator('./dist/server.js');
require('source-map-support').install({
  retrieveSourceMap: () => generator.toString(),
});
*/

const app = express();

const publicPath = path.join(__dirname, './public');

app.enable('trust proxy');

function onRoot(req, res) {
  const location = history.createLocation(req.path);
  console.info('routes:', routes, 'location:', location);
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      fs.readFile('./public/index.html', (err, data) => {
        if (err) {
          throw err;
        }
        const store = createStore(reducers);
        // You can also check renderProps.components or renderProps.routes for
        // your "not found" component or route respectively, and send a 404 as
        // below, if you're using a catch-all route.
        const rendered = renderToString(
          <Provider store={store}>
            <I18nextProvider i18n={i18next}>
              <RouterContext {...renderProps} />
            </I18nextProvider>
          </Provider>
        );
        res.status(200).send(data.replace('>.<', `>${rendered}<`));
      });
    } else {
      res.status(404).send('Not found');
    }
  });
}

app.route('/').get(onRoot);

app.use('/', express.static(publicPath, {
  maxage: 31557600,
}));

app.use(onRoot);

const server = app.listen(process.env.PORT || 8080, function listen() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
