import React, { Component, Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';

interface InputFileImageProps {
  forwardRef: React.RefObject<HTMLInputElement>;
  name: string;
}

class InputFileImage extends Component<InputFileImageProps> {
  constructor(props: InputFileImageProps) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="image" className="image__label">
          Choose image:
        </label>
        <input ref={this.props.forwardRef} type="file" accept="image/*" className="image__input" />
        {this.props.name && <ErrorMessage errorMessage={this.props.name} />}
      </Fragment>
    );
  }
}

export default InputFileImage;
