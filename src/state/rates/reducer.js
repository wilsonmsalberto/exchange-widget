import * as actionTypes from './actionTypes';

export const ratesInitialState = {
  rates: {},
};

export const rates = (state = ratesInitialState.rates, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_RATES_SUCCESS: {
      const { result } = action.payload;

      return { ...result, ...state };
    }
    case actionTypes.GET_RATES_START:
    case actionTypes.GET_RATES_FAIL:
    default:
      return state;
  }
};

export const getRates = (state = ratesInitialState.rates) => state;

export default rates;
