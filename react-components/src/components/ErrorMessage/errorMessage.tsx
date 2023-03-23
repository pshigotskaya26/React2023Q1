import React, { Component } from 'react';
import './index.css';

interface ErrorMessageProps {
  errorMessage: string;
}

class ErrorMessage extends Component<ErrorMessageProps> {
  constructor(props: ErrorMessageProps) {
    super(props);
  }
  render() {
    return <span className="error-message">{this.props.errorMessage}</span>;
  }
}

export default ErrorMessage;
