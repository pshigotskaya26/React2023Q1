import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import { Provider } from 'react-redux';
import { initStore } from './store/store';
import { productApi } from './store/product/product.api';

export async function render(url: string, opts: ReactDOMServer.RenderToPipeableStreamOptions) {
  const store = initStore();

  store.dispatch(productApi.endpoints.getProducts.initiate());
  await Promise.all(store.dispatch(productApi.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return [stream, preloadedState];
}
