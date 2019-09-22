import { getApiUrl } from 'state/config';
import {
  GET_RATES_FAIL,
  GET_RATES_START,
  GET_RATES_SUCCESS,
} from './actionTypes';

const currencies = ['EUR', 'GBP', 'USD'];

const fetchRate = async (ratesLink) => fetch(getApiUrl(ratesLink))
  .then((response) => response.json())
  .then((response) => response);

const fetchRates = () => {
  const ratePromises = [];

  for (let i = 0; i < currencies.length; i += 1) {
    const currency = currencies[i];
    const currenciesToSearch = currencies.filter((coin) => coin !== currency);
    let ratesLink = `?symbols=${currenciesToSearch.join(',')}`;

    if (currency !== 'EUR') ratesLink = `${ratesLink}&base=${currency}`;

    ratePromises.push(fetchRate(ratesLink));
  }

  return Promise.all(ratePromises).then((rates) => rates.reduce((acc, rate) => {
    acc[rate.base] = rate;
    return acc;
  }, {}));
};


export const getCurrencyRates = () => async (dispatch) => {
  dispatch({ type: GET_RATES_START });
  try {
    const rates = await fetchRates();

    dispatch({ type: GET_RATES_SUCCESS, payload: { result: rates } });
  } catch (error) {
    dispatch({ type: GET_RATES_FAIL, payload: { error } });

    throw error;
  }
};

export default getCurrencyRates;
