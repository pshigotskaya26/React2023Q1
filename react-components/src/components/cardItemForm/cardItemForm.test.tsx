import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardItemForm from './cardItemForm';

const mockData = {
  id: 1,
  name: 'John',
  birthday: '2023-03-03',
  country: 'Italy',
  isConsent: 'agree',
  male: 'male',
  thumbnail: 'blob:http://127.0.0.1:5173/d9fef1dc-64ee-467e-bea7-d2da477f71e5',
};

describe('Tests for CardItemForm component', () => {
  it('Has CardItemForm a name text', () => {
    render(<CardItemForm product={mockData} />);
    expect(screen.getByTestId('card-birthday')).toHaveTextContent('Birthday');
  });

  it('Has field IsConsent of the CardItemForm value agree', () => {
    render(<CardItemForm product={mockData} />);
    expect(screen.getByTestId('card-consent-value')).toHaveTextContent('agree');
  });

  it('Is a header h3 of the CardItemForm not empty', () => {
    render(<CardItemForm product={mockData} />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).not.toBeEmptyDOMElement();
  });

  it('Has CardItemForm a image tag', () => {
    render(<CardItemForm product={mockData} />);

    expect(screen.getByRole('img')).toBeTruthy();
  });
});
