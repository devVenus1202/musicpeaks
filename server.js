const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: process.cwd() });
const handler = routes.getRequestHandler(app);
const port = process.env.PORT || 3000;

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60,
});

app.prepare().then(() => {
  const server = express();

  server.use(handler);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`;
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`);
      ssrCache.set(key, html);

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
}
