import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import { WrappedApp } from './App';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
console.log('HYDRATE-------------------');
