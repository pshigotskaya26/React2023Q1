import React from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
//import { render } from './src/entry-server';

//const DEV_ENV = 'development';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;

//const html = fs.readFileSync(path.resolve(__dirname, 'index.html')).toString();
//console.log('html: ', html);
//const parts = html.split('<!--ssr-outlet-->');

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  //const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');

  app.use(vite.middlewares);

  // app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const appHtml = await render(url);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      const parts = template.split('<!--ssr-outlet-->');

      //res.status(200).set({ 'Content-Type': 'text/html' }).end(html);

      res.write(parts[0]);

      const stream = render(req.originalUrl, {
        bootstrapScripts: ['./src/entry-client.tsx'],
        onShellReady() {
          stream.pipe(res);
        },
        onShellError() {},
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err) {
          console.error(err);
        },
      });
    } catch (e) {
      console.log('error: ', e);
    }
  });

  console.log(`listening on http://localhost:${PORT}`);
  app.listen(PORT);
}

createServer();
