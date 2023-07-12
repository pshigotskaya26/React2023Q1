import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './errorMessage';
describe('Tests for ErrorMessage component', () => {
    it('Is the span of ErrorMessage not empty', () => {
        render(React.createElement(ErrorMessage, { errorMessage: 'Error message' }));
        expect(screen.getByTestId('error-message')).not.toBeEmptyDOMElement();
    });
});
