import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { initStore } from './store/store';
import { RootState } from './store/store';

declare global {
  interface Window {
    __INITIAL_STATE__: RootState;
  }
}

const store = initStore(window.__INITIAL_STATE__);

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
