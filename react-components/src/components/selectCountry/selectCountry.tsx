import React, { Component, Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
import CardCountryEnum from '../../types/enums/cardCountryEnum';

interface SelectCountryProps {
  forwardRef: React.RefObject<HTMLSelectElement>;
  name: string;
}

class SelectCountry extends Component<SelectCountryProps> {
  constructor(props: SelectCountryProps) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="country">Country:</label>
        <select ref={this.props.forwardRef} className="country__select">
          <option value="" hidden>
            No selected
          </option>
          <option value={CardCountryEnum.USA}>{CardCountryEnum.USA}</option>
          <option value={CardCountryEnum.BELARUS}>{CardCountryEnum.BELARUS}</option>
          <option value={CardCountryEnum.ITALY}>{CardCountryEnum.ITALY}</option>
          <option value={CardCountryEnum.RUSSIA}>{CardCountryEnum.RUSSIA}</option>
          <option value={CardCountryEnum.POLAND}>{CardCountryEnum.POLAND}</option>
        </select>
        {this.props.name && <ErrorMessage errorMessage={this.props.name} />}
      </Fragment>
    );
  }
}

export default SelectCountry;
