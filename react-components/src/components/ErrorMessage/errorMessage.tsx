import React, { Component } from 'react';
import './index.css';

interface ErrorMessageProps {
  errorMessage: string | undefined;
}

class ErrorMessage extends Component<ErrorMessageProps> {
  constructor(props: ErrorMessageProps) {
    super(props);
  }
  render() {
    return (
      <span data-testid="error-message" className="error-message">
        {this.props.errorMessage}
      </span>
    );
  }
}

export default ErrorMessage;
