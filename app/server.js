require('source-map-support').install();
const express = require('express');
const { renderToString } = require('react-dom/server');
import routes from './core/routes';
import { match, RouterContext } from 'react-router';
const fs = require('fs');
const React = require('react');
const compress = require('compression');
import gaTrackingScriptTemplate from './content/ga.html';
import serverProvider from './components/factories/serverProvider';
// Component stuff.
import calculateInitialState from './core/calculateInitialState';

const app = express();

app.enable('trust proxy');

function onRoot(req, res) {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.path }, (error, redirectLocation, renderProps) => {
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
      const Provider = serverProvider(initialState);
      const initialStateJson = JSON.stringify(initialState || {});
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      const rendered = renderToString(
        <Provider>
          <RouterContext {...renderProps} />
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
const publicPath = './public';
const staticMiddleware = express.static(publicPath, {
  maxage: 31557600,
});
// This tells express to route ALL requests through this middleware
// This middleware ends up being a "catch all" error handler
const errorHandlerMiddleware = (err, req, res, next) => {
  console.error('Error middleware', err);
  if (err) {
    res.send(500, { error: err });
  } else {
    res.send(500, { error: '500 - Internal Server Error' });
  }
};

// Use gzip compression.
app.use(compress());
// This order is necessary, otherwise if staticMiddleware were on top, then for the
// root route '/' it would just literally load the static index.html file from the public folder.
app.get('/', onRoot);
app.use('/', staticMiddleware);
app.use(onRoot);
app.use(errorHandlerMiddleware);

const server = app.listen(process.env.PORT || 8080, function listen() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
