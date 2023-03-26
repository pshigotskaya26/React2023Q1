import React, { Component, Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';

interface InputNameProps {
  forwardRef: React.RefObject<HTMLInputElement>;
  name: string;
}

class InputName extends Component<InputNameProps> {
  constructor(props: InputNameProps) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="name">Name:</label>
        <input
          ref={this.props.forwardRef}
          id="name"
          type="text"
          className="name__input"
          name="name"
          placeholder="enter name"
        />
        {this.props.name && <ErrorMessage errorMessage={this.props.name} />}
      </Fragment>
    );
  }
}

export default InputName;
