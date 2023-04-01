import React, { Fragment } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormInputs } from 'components/form/form';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
import CardCountryEnum from '../../types/enums/cardCountryEnum';

interface SelectCountryProps {
  registerAttr: UseFormRegister<FormInputs>;
  errorAttr: FieldErrors<FormInputs>;
}

const SelectCountry: React.FC<SelectCountryProps> = (props) => {
  return (
    <Fragment>
      <label htmlFor="country">Country:</label>
      <select
        className="country__select"
        {...props.registerAttr('selectCountry', {
          validate: (value) => {
            if (value === '') {
              return 'Country is not choosen';
            } else {
              return true;
            }
          },
        })}
      >
        <option value="" hidden>
          No selected
        </option>
        <option value={CardCountryEnum.USA}>{CardCountryEnum.USA}</option>
        <option value={CardCountryEnum.BELARUS}>{CardCountryEnum.BELARUS}</option>
        <option value={CardCountryEnum.ITALY}>{CardCountryEnum.ITALY}</option>
        <option value={CardCountryEnum.RUSSIA}>{CardCountryEnum.RUSSIA}</option>
        <option value={CardCountryEnum.POLAND}>{CardCountryEnum.POLAND}</option>
      </select>
      {props.errorAttr.selectCountry?.message && (
        <ErrorMessage errorMessage={props.errorAttr.selectCountry.message} />
      )}
    </Fragment>
  );
};

export default SelectCountry;
