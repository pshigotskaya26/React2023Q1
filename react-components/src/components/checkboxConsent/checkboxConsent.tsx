import React, { Fragment } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormInputs } from 'components/form/form';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';

interface CheckboxConsentProps {
  registerAttr: UseFormRegister<FormInputs>;
  errorAttr: FieldErrors<FormInputs>;
}

const CheckboxConsent: React.FC<CheckboxConsentProps> = (props) => {
  return (
    <Fragment>
      <label htmlFor="consent" className="consent__label">
        <input
          {...props.registerAttr('checkboxConsent', {
            validate: (value) => {
              if (value) {
                return value;
              } else if (!value) {
                return 'Consent is not choosen';
              }
            },
          })}
          id="consent"
          className="consent__checkbox"
          type="checkbox"
        />
        I consent to my personal data
      </label>
      {props.errorAttr.checkboxConsent?.message && (
        <ErrorMessage errorMessage={props.errorAttr.checkboxConsent.message} />
      )}
    </Fragment>
  );
};

export default CheckboxConsent;
