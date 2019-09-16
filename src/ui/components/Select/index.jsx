import React from 'react';
import PropTypes from 'prop-types';

import { StyledSelect } from './styles';

const Select = ({
  options,
  ...otherProps
}) => (
  <StyledSelect
    { ...otherProps }
  >
    {
      options.map((option) => (
        <option
          key={ option }
          value={ option }
        >
          {option}
        </option>
      ))
    }
  </StyledSelect>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
