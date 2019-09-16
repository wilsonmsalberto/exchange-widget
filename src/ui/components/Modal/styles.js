import { css } from '@emotion/core';
import styled from '@emotion/styled';

import CoreButton from 'ui/components/Button';

const CloseButton = styled(CoreButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  font-size: 3rem;
  line-height: 3rem;
  padding: 0;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0,0,0, .3);
  outline: 0;
  opacity: 0;
  transition: opacity 250ms ease-out;
  pointer-events: none;
  will-change: height, opacity;
  ${(props) => {
    const { isActive } = props;

    if (isActive) {
      return css`
      height: 100vh;
      opacity: 1;
      pointer-events: auto;
      will-change: height, opacity;
    `;
    }

    return null;
  }};
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 250ms ease-out;
  pointer-events: none;
  will-change: opacity;
  ${(props) => {
    const { isActive } = props;

    if (isActive) {
      return css`
      opacity: 1;
      pointer-events: auto;
    `;
    }

    return null;
  }};
`;

const Content = styled.div`
  position: relative;
  z-index: 101;
  display: flex;
  flex-direction: column;
  max-height: 85%;
  margin: 20px;
  padding-top: 30px;
  background-color: #fff;
  border-radius: 8px;
`;

export {
  Backdrop,
  Content,
  CloseButton,
  Wrapper,
};
