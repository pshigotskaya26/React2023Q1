import React from 'react';
import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import CardsList from './cardsList';
const mockApiData = [
    {
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
    },
];
describe('Tests for CardsList component', () => {
    it('Has CardsList a header h2', async () => {
        render(React.createElement(CardsList, { apiData: mockApiData }));
        await waitFor(() => expect(screen.getByRole('heading', {
            level: 2,
        })).toHaveTextContent(`Cards list`));
    });
    it('Is a header h3 of the cardItem not empty', () => {
        render(React.createElement(CardsList, { apiData: mockApiData }));
        expect(screen.getByTestId('cards__container')).not.toBeEmptyDOMElement();
    });
});
