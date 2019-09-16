import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 1.6rem;
  border-radius: 2.5rem;
  padding: 1rem;
  margin: 0;
  color: #fff;
  border: 0;
  cursor: pointer;

  ${(props) => {
    if (props.green) {
      return css`
        border: none;
        background: #1abc9c;
        color: white;
      `;
    }

    if (props.red) {
      return css`
        border: none;
        background: #e74c3c;
        color: white;
      `;
    }

    if (props.blue) {
      return css`
        border: none;
        background: #3498db;
        color: white;
      `;
    }

    if (props.transparent) {
      return css`
        border: none;
        color: #2c3e50;
      `;
    }

    return css`
      background: transparent;
    `;
  }};

  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`;

export default StyledButton;
