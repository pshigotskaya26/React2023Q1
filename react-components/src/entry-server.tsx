import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/rootReducer';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';
import { Provider } from 'react-redux';
import { RootState, RootStore, initStore } from './store/store';
import { productApi } from './store/product/product.api';
import { IDataAPI } from './types/interfaces/IDataAPI';
import WrapperHtml from './components/wrapperHtml/wrapperHtml';

//const store = setupStore();

//let preloadedState = {};

export async function render(url: string, opts: ReactDOMServer.RenderToPipeableStreamOptions) {
  //const preloadedState = store.getState();
  const store = initStore();

  console.log('Entry-SERVER');

  store.dispatch(productApi.endpoints.getProducts.initiate());
  await Promise.all(store.dispatch(productApi.util.getRunningQueriesThunk()));

  const preloadedState = store.getState();

  //initStore(preloadedState);
  console.log('state with cards------------------: ', store.getState());

  //window.__PRELOADED_STATE__ = JSON.stringify(preloadedState).replace(/</g, '\\u003c');

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
