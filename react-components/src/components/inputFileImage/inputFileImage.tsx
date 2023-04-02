import React, { Fragment } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormInputs } from 'components/form/form';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';

interface InputFileImageProps {
  registerAttr: UseFormRegister<FormInputs>;
  errorAttr: FieldErrors<FormInputs>;
}

const InputFileImage: React.FC<InputFileImageProps> = (props) => {
  return (
    <Fragment>
      <label htmlFor="image" className="image__label">
        Choose image:
      </label>
      <input
        {...props.registerAttr('inputFileImage', {
          required: 'Image is not choosen',
          validate: {
            format: (files: FileList) => (files && files.length !== 0) || 'Image is not choosen',
          },
        })}
        type="file"
        accept="image/*"
        className="image__input"
        data-testid="image__input"
      />
      {props.errorAttr.inputFileImage?.message && (
        <ErrorMessage errorMessage={props.errorAttr.inputFileImage.message} />
      )}
    </Fragment>
  );
};

export default InputFileImage;
