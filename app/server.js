require('source-map-support').install();
const express = require('express');
const { renderToString } = require('react-dom/server');
import { StaticRouter } from 'react-router';
import Page from './components/pages/Page';
const fs = require('fs');
const React = require('react');
const compress = require('compression');
// Component stuff.
import calculateInitialState from './core/calculateInitialState';
import Helmet from 'react-helmet';
import Contexts from './components/contexts/Contexts';
import configureStore from './core/configureStore';

const app = express();

app.enable('trust proxy');

function onRoot(req, res) {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  fs.readFile('./public/index.html', (err, data) => {
    if (err) {
      throw err;
    }
    const initialState = calculateInitialState(req);
    const store = configureStore(initialState);

    // You can also check renderProps.components or renderProps.routes for
    // your "not found" component or route respectively, and send a 404 as
    // below, if you're using a catch-all route.
    const rendered = renderToString(
      <Contexts store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Page />
        </StaticRouter>
      </Contexts>
    );

    const head = Helmet.rewind();
    const headString = head.title.toString() + head.meta.toString() + head.link.toString() +
      head.script.toString();
    const html = data.toString()
      .replace('<html>', `<html ${head.htmlAttributes.toString()}>`)
      .replace('<!-- head -->\n', headString)
      .replace('>.<', `>${rendered}<`);
    res.status(200).send(html);
  });
}
const publicPath = './public';
const staticMiddleware = express.static(publicPath, {
  maxage: 31557600,
});
// This tells express to route ALL requests through this middleware
// This middleware ends up being a "catch all" error handler
const errorHandlerMiddleware = (err, req, res) => {
  // eslint-disable-next-line no-console
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

const server = app.listen(process.env.PORT || 8080, '0.0.0.0', () => {
  const host = server.address().address;
  const port = server.address().port;

  // eslint-disable-next-line no-console
  console.log('Example app listening at http://%s:%s', host, port);
});
