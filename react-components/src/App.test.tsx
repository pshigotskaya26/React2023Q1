import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { App, WrappedApp } from './App';

describe('App', () => {
  it('Renders component WrappedApp', () => {
    render(
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    );
  });

  it('Renders not found page if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-page-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not found page');
  });
});
