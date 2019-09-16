import React from 'react';
import PropTypes from 'prop-types';
import ScrollLock from 'react-scrolllock';

import Portal from 'ui/components/Portal';

import {
  Backdrop,
  CloseButton,
  Content,
  Wrapper,
} from './styles';

const Modal = ({
  closeModal,
  children,
  isActive,
}) => {
  const handleClose = () => closeModal();

  return (
    <Portal>
      <ScrollLock isActive={ isActive } />
      <Wrapper isActive={ isActive }>
        <Backdrop
          aria-hidden={ !isActive }
          isActive={ isActive }
          onClick={ handleClose }
          role="presentation"
          tabIndex="-1"
        />
        <Content>
          <CloseButton
            aria-label="Close"
            onClick={ handleClose }
            transparent
          >
            x
          </CloseButton>
          {children}
        </Content>
      </Wrapper>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Modal;
