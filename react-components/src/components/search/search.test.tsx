import React from 'react';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './search';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Tests for Search component', () => {
  it('Renders component WrappedApp', () => {
    render(
      <Provider store={store}>
        <Search searchInputValue="bob" />
      </Provider>
    );
    const inputSearch = screen.getByTestId('search__input');
    const newSearchValue = 'Hello';
    fireEvent.input(inputSearch, { target: { value: newSearchValue } });
  });
});
