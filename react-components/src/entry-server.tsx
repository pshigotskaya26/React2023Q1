import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { WrappedApp } from './App';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

export function render(url: string, opts: ReactDOMServer.RenderToPipeableStreamOptions) {
  console.log('---store: ', store);
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    opts
  );
  return stream;
}
