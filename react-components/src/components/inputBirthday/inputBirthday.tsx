import React, { Component, Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';

const InputBirthday = () => {
  return (
    <Fragment>
      <label htmlFor="birthday">Birthday:</label>
      <input id="birthday" type="date" className="birthday__input" name="Birthday" />
      <ErrorMessage errorMessage={''} />
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
