import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardsList from './cardsList';

describe('Tests for CardsList component', () => {
  it('Has CardsList a header h2', () => {
    render(<CardsList />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(`Cards list`);
  });

  it('Is a header h3 of the cardItem not empty', () => {
    render(<CardsList />);
    expect(screen.getByTestId('cards__container')).not.toBeEmptyDOMElement();
  });
});
