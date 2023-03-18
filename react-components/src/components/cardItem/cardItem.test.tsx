import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardItem from './cardItem';

const mockData = {
  id: 1,
  title: 'Steel Analog Couple Watches',
  price: 35,
  rating: 4.79,
  brand: 'Eastern Watches',
  category: 'womens-watches',
  thumbnail: 'https://i.dummyjson.com/data/products/66/thumbnail.jpg',
};

describe('Tests for CardItem component', () => {
  it('Has cardItem a category text', () => {
    render(<CardItem product={mockData} />);
    expect(screen.getByTestId('card-category')).toHaveTextContent('Category');
  });

  it('Is a header h3 of the cardItem not empty', () => {
    render(<CardItem product={mockData} />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).not.toBeEmptyDOMElement();
  });

  it('Is cart-category not empty', () => {
    render(<CardItem product={mockData} />);

    expect(screen.getByTestId('card-category')).not.toBeEmptyDOMElement();
  });

  it('Has cardItem a brand text', () => {
    render(<CardItem product={mockData} />);
    expect(screen.getByTestId('card-brand')).toHaveTextContent('Brand');
  });

  it('Is cart-brand not empty', () => {
    render(<CardItem product={mockData} />);

    expect(screen.getByTestId('card-brand')).not.toBeEmptyDOMElement();
  });

  it('Has cardItem a image tag', () => {
    render(<CardItem product={mockData} />);

    expect(screen.getByRole('img')).toBeTruthy();
  });

  it('Is cart-raiting not empty', () => {
    render(<CardItem product={mockData} />);

    expect(screen.getByTestId('card-raiting')).not.toBeEmptyDOMElement();
  });
});
