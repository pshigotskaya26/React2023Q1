import React from 'react';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './search';

describe('Tests for Search component', () => {
  it('Renders component WrappedApp', () => {
    const searchComponent = render(<Search />);
    const inputSearch = screen.getByTestId('search__input');
    const newSearchValue = 'Hello';
    fireEvent.input(inputSearch, { target: { value: newSearchValue } });
  });
});
