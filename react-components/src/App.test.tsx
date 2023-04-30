import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';

describe('App', () => {
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
