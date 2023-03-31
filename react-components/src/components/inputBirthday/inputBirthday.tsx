import React, { Component, Fragment } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
import { FormInputs } from 'components/form/form';

interface InputBirthdayProps {
  registerAttr: UseFormRegister<FormInputs>;
  errorAttr: FieldErrors<FormInputs>;
}

const InputBirthday: React.FC<InputBirthdayProps> = (props) => {
  return (
    <Fragment>
      <label htmlFor="birthday">Birthday:</label>
      <input
        id="birthday"
        type="date"
        className="birthday__input"
        {...props.registerAttr('inputBirthday', {
          validate: (value) => {
            if (Date.parse(value) && Date.parse(value) <= Date.now()) {
              return true;
            } else if (Date.parse(value) && Date.parse(value) > Date.now()) {
              return "Birthday must be less now' date";
            } else {
              return 'Birthday is not choosen';
            }
          },
        })}
      />
      {props.errorAttr.inputBirthday?.message && (
        <ErrorMessage errorMessage={props.errorAttr.inputBirthday.message} />
      )}
    </Fragment>
  );
};
/*
interface InputBirthdayProps {
  forwardRef: React.RefObject<HTMLInputElement>;
  name: string;
}

class InputBirthday extends Component<InputBirthdayProps> {
  constructor(props: InputBirthdayProps) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="birthday">Birthday:</label>
        <input
          ref={this.props.forwardRef}
          id="birthday"
          type="date"
          className="birthday__input"
          name="Birthday"
        />
        {this.props.name && <ErrorMessage errorMessage={this.props.name} />}
      </Fragment>
    );
  }
}
*/
export default InputBirthday;
