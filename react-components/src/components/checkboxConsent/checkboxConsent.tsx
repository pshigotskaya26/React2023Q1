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

/*      
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
*/
export default CheckboxConsent;
