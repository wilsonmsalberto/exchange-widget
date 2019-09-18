import { getApiUrl } from 'state/config';
import {
  GET_RATES_FAIL,
  GET_RATES_START,
  GET_RATES_SUCCESS,
} from './actionTypes';

const currencies = [
  'EUR',
  'GBP',
  'USD',
];

const ratesLink = `&symbols=${currencies.join(',')}`;

const fetchRates = async () => fetch(getApiUrl(ratesLink))
  .then((response) => response.json())
  .then((response) => response);

export const getCurrencyRates = () => async (dispatch) => {
  dispatch({ type: GET_RATES_START });
  try {
    const { rates } = await fetchRates();

    dispatch({ type: GET_RATES_SUCCESS, payload: { result: rates } });
  } catch (error) {
    dispatch({ type: GET_RATES_FAIL, payload: { error } });

    throw error;
  }
};

export default getCurrencyRates;
