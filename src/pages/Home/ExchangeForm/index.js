import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  Select,
  Wrapper,
} from './styles';

const ExchangeForm = ({
  children,
  className,
}) => (
  <Wrapper className={ className }>
    <Select
      options={ [
        'EUR',
        'GBP',
        'USD',
      ] }
    />
    <Input placeholder="0" />
    {children}
  </Wrapper>
);

ExchangeForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ExchangeForm.defaultProps = {
  children: null,
  className: undefined,
};

export default ExchangeForm;
