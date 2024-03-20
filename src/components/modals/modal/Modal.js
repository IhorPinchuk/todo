import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import sprite from '../../../images/sprite.svg';
import { CloseButton, CloseSVG, Content, Overlay } from './Modal.styled';

const Modal = ({ isOpen, setIsOpen, children }) => {
const onClose =useCallback(() => setIsOpen(prevIsOpen => !prevIsOpen), [setIsOpen])

  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          onClose();
        }
      });
    } else {
      document.removeEventListener('keydown', event => {
        if (event.key === 'Escape') {
          onClose();
        }
      });
    }
    return () => {
      document.removeEventListener('keydown', event => {
        if (event.key === 'Escape') {
          onClose();
        }
      });
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Content>
        <CloseButton onClick={handleClose}>
          <CloseSVG>
            <use href={sprite + '#icon-x-close'}></use>
          </CloseSVG>
        </CloseButton>
        {children}
      </Content>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

export default Modal;