import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// State
import { getCurrencyRates } from 'state/rates/actions';

import PairSwitcher from './PairSwitcher';

import {
  ExchangeButton,
  InputExchangeForm,
  OutputExchangeForm,
  Wrapper,
} from './styles';

const Home = ({
  fetchRates,
  rates,
}) => {
  const [activeRate, setActiveRate] = useState();
  const [rateInput, setRateInput] = useState('EUR');
  const [rateOutput, setRateOutput] = useState('GBP');
  const [inputAmount, setInputAmount] = useState(0);
  const [outputAmount, setOutputAmount] = useState(0);

  useEffect(() => { fetchRates(); }, [fetchRates]);

  useEffect(() => {
    if (!rates[rateInput]) return;

    const rate = rates[rateInput].rates[rateOutput];
    const output = rate * inputAmount;

    setActiveRate(rate);
    setOutputAmount(output);
  }, [inputAmount, rateInput, rateOutput, rates]);

  return (
    <>
      <InputExchangeForm
        rateOutput={ rateOutput }
        setInputAmount={ setInputAmount }
        setRateInput={ setRateInput }
      >
        <PairSwitcher
          activeRate={ activeRate }
          rateInput={ rateInput }
          rateOutput={ rateOutput }
          setRateInput={ setRateInput }
          setRateOutput={ setRateOutput }
        />
      </InputExchangeForm>
      <OutputExchangeForm
        inputAmount={ inputAmount }
        outputAmount={ outputAmount }
        rateInput={ rateInput }
        setRateOutput={ setRateOutput }
      />
      <Wrapper>
        <ExchangeButton type="submit">
          Exchange
        </ExchangeButton>
      </Wrapper>
    </>
  );
};

Home.propTypes = {
  fetchRates: PropTypes.func.isRequired,
  rates: PropTypes.shape({
    base: PropTypes.string,
    rates: PropTypes.string,
    date: PropTypes.string,
  }),
};

Home.defaultProps = {
  rates: {},
};

const mapStateToProps = (state) => ({
  rates: state.rates,
});

const mapDispatchToProps = {
  fetchRates: getCurrencyRates,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
