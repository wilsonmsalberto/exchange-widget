import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './styles';

const Input = ({
  type,
  ...otherProps
}) => (
  <StyledInput
    type={ type }
    { ...otherProps }
  />
);

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
