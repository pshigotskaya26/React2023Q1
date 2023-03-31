import React, { Component, Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
import CardMaleEnum from '../../types/enums/cardMaleEnum';

const InputRadioMale = () => {
  return (
    <Fragment>
      <label htmlFor="switcher" className="switcher__label">
        Male/Female:
      </label>
      <fieldset id="switcher-group" className="switcher">
        <label className="switcher-group-item">
          <input type="radio" name="switcher" value={CardMaleEnum.MALE} />
          {CardMaleEnum.MALE}
        </label>
        <label className="switcher-group-item">
          <input type="radio" name="switcher" value={CardMaleEnum.FEMALE} />
          {CardMaleEnum.FEMALE}
        </label>
      </fieldset>
      <ErrorMessage errorMessage={''} />
    </Fragment>
  );
};

/*      
interface InputRadioMaleProps {
  forwardRefFirst: React.RefObject<HTMLInputElement>;
  forwardRefSecond: React.RefObject<HTMLInputElement>;
  name: string;
}

class InputRadioMale extends Component<InputRadioMaleProps> {
  constructor(props: InputRadioMaleProps) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="switcher" className="switcher__label">
          Male/Female:
        </label>
        <fieldset id="switcher-group" className="switcher">
          <label className="switcher-group-item">
            <input
              ref={this.props.forwardRefFirst}
              type="radio"
              name="switcher"
              value={CardMaleEnum.MALE}
            />
            {CardMaleEnum.MALE}
          </label>
          <label className="switcher-group-item">
            <input
              ref={this.props.forwardRefSecond}
              type="radio"
              name="switcher"
              value={CardMaleEnum.FEMALE}
            />
            {CardMaleEnum.FEMALE}
          </label>
        </fieldset>
        {this.props.name && <ErrorMessage errorMessage={this.props.name} />}
      </Fragment>
    );
  }
}
*/
export default InputRadioMale;
