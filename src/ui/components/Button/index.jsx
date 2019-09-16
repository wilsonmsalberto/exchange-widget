import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

const Button = ({
  children,
  onClick,
  type,
  ...otherProps
}) => {
  const handleOnClick = () => {
    if (typeof onClick === 'function') onClick();
  };

  return (
    <StyledButton
      onClick={ handleOnClick }
      type={ type }
      { ...otherProps }
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: undefined,
  type: 'button',
};

export default Button;
