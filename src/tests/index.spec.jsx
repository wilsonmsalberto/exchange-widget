import React from 'react';
import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

import { Provider } from 'react-redux';

import store from 'state/store';

import App from '..';

expect.extend(matchers);

const getRenderWrapper = (props) => render(
  <Provider store={ store }>
    <App { ...props } />
  </Provider>,
);

describe('App Component', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      fetch.mockResponse(JSON.stringify({}));
      const wrapper = getRenderWrapper();

      const { asFragment } = wrapper;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
