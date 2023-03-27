import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyForm from './myForm';

describe('Tests for MyForm component', () => {
  it('Has Input name', () => {
    render(<MyForm />);
    const inputNode = screen.getByTestId('name__input');
    inputNode.textContent = 'John';
    expect(inputNode.textContent).toBe('John');
  });
});
