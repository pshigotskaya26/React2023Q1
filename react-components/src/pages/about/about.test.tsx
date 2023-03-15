import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './about';

describe('Tests for About component', () => {
  it('Has About page a header h1', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About us');
  });
});
