import React, { Fragment } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
import { FormInputs } from 'components/form/form';

interface InputNameProps {
  registerAttr: UseFormRegister<FormInputs>;
  errorAttr: FieldErrors<FormInputs>;
}

const InputName: React.FC<InputNameProps> = (props) => {
  return (
    <Fragment>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        className="name__input"
        placeholder="enter name"
        data-testid="name__input"
        {...props.registerAttr('inputName', {
          pattern: {
            value: /^[A-ZА-Я]{1}[а-яА-Яa-zA-Z]{2,}$/,
            message:
              "Name is invalid: first letter must be in Upper case and name's length must be >=3", // JS only: <p>error message</p> TS only support string
          },
          required:
            'Name is invalid: first letter must be in Upper case and name"s length must be >=3',
        })}
      />
      {props.errorAttr.inputName?.message && (
        <ErrorMessage errorMessage={props.errorAttr.inputName?.message} />
      )}
    </Fragment>
  );
};

export default InputName;
