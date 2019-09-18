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

const Home = ({ fetchRates }) => {
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [selectedTarget, setSelectedTarget] = useState('');

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return (
    <>
      <InputExchangeForm
        selected={ selectedTarget }
        setSelected={ setSelectedOrigin }
      >
        <PairSwitcher />
      </InputExchangeForm>
      <OutputExchangeForm
        selected={ selectedOrigin }
        setSelected={ setSelectedTarget }
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
};

const mapStateToProps = (state) => ({
  rates: state.rates,
});

const mapDispatchToProps = {
  fetchRates: getCurrencyRates,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
