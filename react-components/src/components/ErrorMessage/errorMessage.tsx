import React from 'react';
import './index.css';

interface ErrorMessageProps {
  errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  return (
    <span data-testid="error-message" className="error-message">
      {props.errorMessage}
    </span>
  );
};

export default ErrorMessage;
