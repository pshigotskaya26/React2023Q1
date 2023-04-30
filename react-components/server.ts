import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const [appHtml, preloadedState] = await render(url);
      template.replace(`<!--ssr-outlet-->`, appHtml);
      const parts = template.split('<!--ssr-outlet-->');

      res.write(
        parts[0] +
          `<script>
             window["__PRELOADED_STATE__"] = ${JSON.stringify(preloadedState).replace(
               /</g,
               '\\u003c'
             )}
           </script>`
      );

      const [stream] = await render(req.originalUrl, {
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
