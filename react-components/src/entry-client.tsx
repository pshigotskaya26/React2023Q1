import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/rootReducer';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import { WrappedApp } from './App';
import { App } from './App';
import { Provider } from 'react-redux';
import { initStore } from './store/store';
import { RootState } from './store/store';
//import { State } from 'types';

// global redeclared types
declare global {
  interface Window {
    __INITIAL_STATE__: RootState;
  }
}

const store = initStore(window.__INITIAL_STATE__);

console.log('Entry-CLIENT');

// Create Redux store with state injected by the server
//const store = initStore(window.__PRELOADED_STATE__);

// Allow the passed state to be garbage-collected
//if (window.__PRELOADED_STATE__) {
//delete window.__PRELOADED_STATE__;
//}

//const store = initStore(window.__PRELOADED_STATE__)
//let windowPreload = window.

//const store = initStore(window.__PRELOADED_STATE__);
//delete window.__PRELOADED_STATE__;

//console.log(window.__)
hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
