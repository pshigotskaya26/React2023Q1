import React from 'react';
import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MyForm from './myForm';

describe('Tests for MyForm component', () => {
  it('Has Input name', () => {
    render(<MyForm />);
    const inputNode = screen.getByTestId('name__input');
    inputNode.textContent = 'John';
    expect(inputNode.textContent).toBe('John');
  });

  it('Are form fields valid', () => {
    render(<MyForm />);

    const inputNameNode = screen.getByTestId('name__input');
    const inputBirthdayNode = screen.getByTestId('birthday__input');
    const selectCountryNode = screen.getByTestId('country__select');
    const checkboxConsentNode = screen.getByTestId('consent__checkbox');
    const radioMaleNode = screen.getByTestId('radio-male');
    const inputImageNode = screen.getByTestId('image__input');
    const mockDataImage = new File(['house'], 'house.jpg', { type: 'image/jpg' });

    fireEvent.change(inputNameNode, { target: { value: 'Tanya' } });
    fireEvent.change(inputBirthdayNode, { target: { value: '2022-04-02' } });
    fireEvent.change(selectCountryNode, { target: { value: 'POLAND' } });
    fireEvent.change(checkboxConsentNode, { target: { value: true } });
    fireEvent.click(radioMaleNode);
    fireEvent.change(inputImageNode, {
      target: { files: { item: () => mockDataImage, length: 1, 0: mockDataImage } },
    });

    expect(inputNameNode).toBeValid();
    expect(inputBirthdayNode).toBeValid();
    expect(selectCountryNode).toBeValid();
    expect(checkboxConsentNode).toBeValid();
    expect(radioMaleNode).toBeValid();
    expect(inputImageNode).toBeValid();
  });
});
