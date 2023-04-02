import React, { Fragment } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
import CardMaleEnum from '../../types/enums/cardMaleEnum';
import { FormInputs } from 'components/form/form';

interface InputRadioMaleProps {
  registerAttr: UseFormRegister<FormInputs>;
  errorAttr: FieldErrors<FormInputs>;
}

const InputRadioMale: React.FC<InputRadioMaleProps> = (props) => {
  return (
    <Fragment>
      <label htmlFor="switcher" className="switcher__label">
        Male/Female:
      </label>
      <fieldset id="switcher-group" className="switcher">
        <label className="switcher-group-item">
          <input
            {...props.registerAttr('inputRadioMale', {
              validate: (value) => {
                if (value && (value === CardMaleEnum.MALE || value === CardMaleEnum.FEMALE)) {
                  return true;
                } else if (!value) {
                  return 'Male is not choosen';
                }
              },
            })}
            type="radio"
            value={CardMaleEnum.MALE}
            data-testid="radio-male"
          />
          {CardMaleEnum.MALE}
        </label>
        <label className="switcher-group-item">
          <input
            {...props.registerAttr('inputRadioMale', {
              validate: (value) => {
                if (value && (value === CardMaleEnum.MALE || value === CardMaleEnum.FEMALE)) {
                  return true;
                } else if (!value) {
                  return 'Male is not choosen';
                }
              },
            })}
            type="radio"
            value={CardMaleEnum.FEMALE}
            data-testid="radio-female"
          />
          {CardMaleEnum.FEMALE}
        </label>
      </fieldset>
      {props.errorAttr.inputRadioMale?.message && (
        <ErrorMessage errorMessage={props.errorAttr.inputRadioMale.message} />
      )}
    </Fragment>
  );
};

export default InputRadioMale;
