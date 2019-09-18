import React, { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Input,
  Select,
  Wrapper,
} from './styles';

const ExchangeForm = ({
  children,
  className,
  rates,
  selected,
  setSelected,
}) => {
  const [activeRate, setActiveRate] = useState('');
  const options = Object.keys(rates).filter((rate) => rate !== selected);

  useLayoutEffect(() => {
    if (!activeRate) {
      setActiveRate(options[0]);
      setSelected(options[0]);
    }
  }, [activeRate, options, setSelected]);

  const handleOnChange = (e) => {
    setActiveRate(e.target.value);
    setSelected(e.target.value);
  };

  return (
    <Wrapper className={ className }>
      <Select
        onChange={ handleOnChange }
        options={ options }
        value={ activeRate }
      />
      <Input placeholder="0" />
      {children}
    </Wrapper>
  );
};

ExchangeForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  rates: PropTypes.objectOf(PropTypes.number),
  selected: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
};

ExchangeForm.defaultProps = {
  children: null,
  className: undefined,
  rates: {},
  selected: undefined,
};

const mapStateToProps = (state) => ({
  rates: state.rates,
});

export default connect(mapStateToProps, null)(ExchangeForm);
