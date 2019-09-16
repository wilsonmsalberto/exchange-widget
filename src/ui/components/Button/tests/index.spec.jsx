import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { matchers } from 'jest-emotion';

import Button from '..';

expect.extend(matchers);

const getRenderWrapper = (props) => render(<Button { ...props } />);

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should contain text content', () => {
      const wrapper = getRenderWrapper({ children: 'Button Text' });

      const { asFragment } = wrapper;

      expect(asFragment()).toMatchSnapshot();
    });

    it('should contain node content', () => {
      const MockedNode = <div>Node Content</div>;
      const wrapper = getRenderWrapper({ children: MockedNode });

      const { asFragment } = wrapper;

      expect(asFragment()).toMatchSnapshot();
    });

    it('should contain a button of a different type', () => {
      const wrapper = getRenderWrapper({
        children: 'Button Text',
        type: 'submit',
      });

      const { getByText } = wrapper;

      const button = getByText('Button Text');

      expect(button).toHaveAttribute('type', 'submit');
    });

    it('should render a blue button', () => {
      const wrapper = getRenderWrapper({
        children: 'Blue Button',
        blue: true,
      });

      const { getByText } = wrapper;

      const button = getByText('Blue Button');

      expect(button).toHaveStyleRule('background', '#3498db');
    });

    it('should render a red button', () => {
      const wrapper = getRenderWrapper({
        children: 'Red Button',
        red: true,
      });

      const { getByText } = wrapper;

      const button = getByText('Red Button');

      expect(button).toHaveStyleRule('background', '#e74c3c');
    });

    it('should render a green button', () => {
      const wrapper = getRenderWrapper({
        children: 'Green Button',
        green: true,
      });

      const { getByText } = wrapper;

      const button = getByText('Green Button');

      expect(button).toHaveStyleRule('background', '#1abc9c');
    });

    it('should render a transparent button', () => {
      const wrapper = getRenderWrapper({
        children: 'Transparent Button',
        transparent: true,
      });

      const { getByText } = wrapper;

      const button = getByText('Transparent Button');

      expect(button).toHaveStyleRule('color', '#2c3e50');
    });
  });

  describe('Behavior', () => {
    it('should trigger an onClick function', () => {
      const mockOnClick = jest.fn();

      const wrapper = getRenderWrapper({
        children: 'Button Text',
        onClick: mockOnClick,
      });

      const { getByText } = wrapper;

      const button = getByText('Button Text');

      fireEvent.click(button);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should do nothing without an onClick function', () => {
      const wrapper = getRenderWrapper({
        children: 'Button Text',
      });

      const { asFragment, getByText } = wrapper;

      const button = getByText('Button Text');

      fireEvent.click(button);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
