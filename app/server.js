const express = require('express');
const path = require('path');
const { renderToString } = require('react-dom/server');
import routes from './core/routes';
import { match, RoutingContext } from 'react-router';
const fs = require('fs');
const React = require('react');
const compress = require('compression');
import * as history from 'history';
import gaTrackingScriptTemplate from './content/ga.html';
// Component stuff.
import reducers from './reducers';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { createStore } from 'redux';
import i18next from './core/translator';
import calculateInitialState from './core/calculateInitialState';

const app = express();
// Use gzip compression.g
app.use(compress());

const publicPath = './public';

app.enable('trust proxy');

function onRoot(req, res) {
  const location = history.createLocation(req.path);
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }
    if (!renderProps) {
      return res.status(404).send('Not found');
    }
    fs.readFile('./public/index.html', (err, data) => {
      if (err) {
        throw err;
      }
      const initialState = calculateInitialState(req);
      const initialStateJson = JSON.stringify(initialState || {});
      const store = createStore(reducers, initialState);
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      const rendered = renderToString(
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <RoutingContext {...renderProps} />
          </I18nextProvider>
        </Provider>
      );

      let headString = '<link rel="stylesheet" href="/build/styles.css">\n';
      headString += `<script>state = ${initialStateJson};</script>\n`;
      // Google analytics script tag.
      const gaTrackingId = process.env.SZEREMI_GA_TRACKING_ID;
      if (gaTrackingId) {
        headString += gaTrackingScriptTemplate.replace('{{ gaTrackingId }}', gaTrackingId);
      }
      const html = data.toString().replace('>.<', `>${rendered}<`).
        replace('<!-- head -->\n', headString);
      res.status(200).send(html);
    });
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
