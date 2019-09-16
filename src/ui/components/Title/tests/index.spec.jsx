import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

import Title from '..';

expect.extend(matchers);

const getRenderWrapper = (props) => render(<Title { ...props } />);

describe('Title Component', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      const wrapper = getRenderWrapper({ children: 'Example Heading' });

      const { asFragment } = wrapper;

      expect(asFragment()).toMatchSnapshot();
    });

    it('should contain a node content', () => {
      const MockedNode = <div>Node Content</div>;
      const wrapper = getRenderWrapper({ children: MockedNode });

      const { asFragment } = wrapper;

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render a <h1> title', () => {
      const wrapper = getRenderWrapper({
        children: 'H1 Title',
        as: 'h1',
      });

      const { getByText } = wrapper;

      const title = getByText('H1 Title');
      const titleElement = wrapper.container.getElementsByTagName('h1')[0];

      expect(title).toHaveStyleRule('font-size', '4rem');
      expect(titleElement).toBeDefined();
    });

    it('should render a <h2> title', () => {
      const wrapper = getRenderWrapper({
        children: 'H2 Title',
        as: 'h2',
      });

      const { getByText } = wrapper;

      const title = getByText('H2 Title');
      const titleElement = wrapper.container.getElementsByTagName('h2')[0];

      expect(title).toHaveStyleRule('font-size', '3rem');
      expect(titleElement).toBeDefined();
    });
  });
});
