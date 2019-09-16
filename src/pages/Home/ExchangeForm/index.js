import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Select,
  Wrapper,
} from './styles';

const ExchangeForm = ({ className }) => (
  <Wrapper className={ className }>
    <Select
      options={ [
        'EUR',
        'GBP',
        'USD',
      ] }
    />
    <Input placeholder="0" />
  </Wrapper>
);

ExchangeForm.propTypes = {
  className: PropTypes.string,
};

ExchangeForm.defaultProps = {
  className: undefined,
};

export default ExchangeForm;
