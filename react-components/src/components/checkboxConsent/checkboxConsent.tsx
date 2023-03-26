import React, { Component, Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';

interface CheckboxConsentProps {
  forwardRef: React.RefObject<HTMLInputElement>;
  name: string;
}

class CheckboxConsent extends Component<CheckboxConsentProps> {
  constructor(props: CheckboxConsentProps) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="consent" className="consent__label">
          <input
            ref={this.props.forwardRef}
            id="consent"
            className="consent__checkbox"
            type="checkbox"
          />
          I consent to my personal data
        </label>
        {this.props.name && <ErrorMessage errorMessage={this.props.name} />}
      </Fragment>
    );
  }
}

export default CheckboxConsent;
