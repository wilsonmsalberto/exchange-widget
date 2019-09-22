import React from 'react';
import styled from '@emotion/styled';
import NumberFormat from 'react-number-format';

// eslint-disable-next-line react/prop-types
const Input = (props) => (
  <NumberFormat
    decimalScale={ 2 }
    { ...props }
  />
);

export const StyledInput = styled(Input)`
  text-align: right;
  font-size: 3.5rem;
  padding: 1rem;
  margin: 0;
  color: #000;
  border: 0;
  outline: none;
  background: transparent;
`;

export default StyledInput;
