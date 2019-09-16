import React from 'react';

import PairSwitcher from './PairSwitcher';

import {
  ExchangeButton,
  InputExchangeForm,
  OutputExchangeForm,
  Wrapper,
} from './styles';

const Home = () => (
  <>
    <InputExchangeForm>
      <PairSwitcher />
    </InputExchangeForm>
    <OutputExchangeForm />
    <Wrapper>
      <ExchangeButton type="submit">
        Exchange
      </ExchangeButton>
    </Wrapper>
  </>
);

export default Home;
