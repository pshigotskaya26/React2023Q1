import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardsListForm from './cardListForm';

const mockData = [
  {
    id: 1,
    name: 'John',
    birthday: '2023-03-03',
    country: 'Italy',
    isConsent: 'agree',
    male: 'male',
    thumbnail: 'blob:http://127.0.0.1:5173/d9fef1dc-64ee-467e-bea7-d2da477f71e5',
  },
];

describe('Tests for CardsListForm component', () => {
  it('Has CardsListForm a header h2', () => {
    render(<CardsListForm cards={mockData} formValidValue={true} />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(`Cards list`);
  });

  it('Is a header h3 of the cardItem not empty', () => {
    render(<CardsListForm cards={mockData} formValidValue={true} />);
    expect(screen.getByTestId('cards__container')).not.toBeEmptyDOMElement();
  });
});
