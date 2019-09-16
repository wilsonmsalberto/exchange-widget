import React from 'react';
import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

import App from '..';

expect.extend(matchers);

const getRenderWrapper = (props) => render(<App { ...props } />);

describe('App Component', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      const wrapper = getRenderWrapper();

      const { asFragment } = wrapper;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
