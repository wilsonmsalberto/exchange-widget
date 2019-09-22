import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Input,
  Select,
  Wrapper,
} from './styles';

const ExchangeForm = ({
  children,
  className,
  outputAmount,
  rateInput,
  rateOutput,
  rates,
  setInputAmount,
  setRateInput,
  setRateOutput,
}) => {
  const [selectValue, setSelectValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSelectChange = useCallback((value) => {
    setSelectValue(value);
    if (setRateInput) setRateInput(value);
    if (setRateOutput) setRateOutput(value);
  }, [setRateInput, setRateOutput]);

  useEffect(() => {
    if (!selectValue) setSelectValue(options[0]);
    if (outputAmount) setInputValue(outputAmount.toFixed(2));
  }, [options, outputAmount, selectValue]);

  useEffect(() => {
    let filterBy = '';

    if (rateInput) filterBy = rateInput;
    if (rateOutput) filterBy = rateOutput;

    const filteredOptions = Object.keys(rates).filter((rate) => rate !== filterBy);

    setOptions(filteredOptions);
  }, [rateInput, rateOutput, rates]);

  const handleOnInputChange = (e) => {
    setInputValue(e.target.value);
    if (setInputAmount) setInputAmount(e.target.value);
  };

  const handleOnSelectChange = (e) => onSelectChange(e.target.value);

  return (
    <Wrapper className={ className }>
      <Select
        onChange={ handleOnSelectChange }
        options={ options }
        value={ selectValue }
      />
      <Input
        disabled={ !!rateInput }
        onChange={ handleOnInputChange }
        placeholder="0"
        value={ inputValue }
      />
      {children}
    </Wrapper>
  );
};

ExchangeForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  outputAmount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  rateInput: PropTypes.string,
  rateOutput: PropTypes.string,
  rates: PropTypes.shape({
    base: PropTypes.string,
    rates: PropTypes.string,
    date: PropTypes.string,
  }),
  setInputAmount: PropTypes.func,
  setRateInput: PropTypes.func,
  setRateOutput: PropTypes.func,
};

ExchangeForm.defaultProps = {
  children: null,
  className: undefined,
  outputAmount: '',
  rateInput: '',
  rateOutput: '',
  rates: {},
  setInputAmount: null,
  setRateInput: null,
  setRateOutput: null,
};

const mapStateToProps = (state) => ({
  rates: state.rates,
});

export default connect(mapStateToProps, null)(ExchangeForm);
