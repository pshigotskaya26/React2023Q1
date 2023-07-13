import React from 'react';
import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import CardItem from './cardItem';

const mockApiData = {
  created: '2017-11-04T22:34:53.659Z',
  episode: ['https://rickandmortyapi.com/api/episode/8'],
  gender: 'Male',
  id: 20,
  image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
  location: { name: 'Interdimensional Cable', url: 'https://rickandmortyapi.com/api/location/6' },
  name: 'Ants in my Eyes Johnson',
  origin: { name: 'unknown', url: '' },
  species: 'Human',
  status: 'unknown',
  type: 'Human with ants in his eyes',
  url: 'https://rickandmortyapi.com/api/character/20',
};

describe('Tests for CardItem component', () => {
  it('Is a header h3 of the cardItem not empty', async () => {
    render(<CardItem product={mockApiData} />);
    await waitFor(() =>
      expect(
        screen.getByRole('heading', {
          level: 3,
        })
      ).not.toBeEmptyDOMElement()
    );
  });

  it('Is cardItem title not empty', () => {
    render(<CardItem product={mockApiData} />);

    expect(screen.getByTestId('card-item__title')).not.toBeEmptyDOMElement();
  });

  it('Has cardItem a image tag', () => {
    render(<CardItem product={mockApiData} />);

    expect(screen.getByRole('img')).toBeTruthy();
  });
});
