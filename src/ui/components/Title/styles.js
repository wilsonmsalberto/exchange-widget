import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Heading = styled.div`
  ${(props) => {
    switch (props.as) {
      case 'h1':
      default:
        return css`
          font-size: 4rem;
        `;
      case 'h2':
        return css`
          font-size: 3rem;
        `;
    }
  }}

  padding: 1rem;
  text-align: center;
  font-weight: 300;
`;

export default Heading;
