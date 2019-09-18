import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { rates as ratesReducer } from './rates/reducer';

const reducer = combineReducers({
  rates: ratesReducer,
});

export default createStore(
  reducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
