import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  .openModal {
    display: flex;
    align-items: center;
    animation: modal-backdrop 0.3s;
  }
  @keyframes modal-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledModal = styled.div`
  width: 1200px;
  height: 800px;
  background-color: #fff;
  border-radius: 8px;
  animation: modal-show 0.3s;
  section {
    height: 100%;
  }
  header,
  footer {
    height: 10%;
    position: relative;
    padding: 15px 20px;
    font-weight: 600;
    border-radius: 8px 8px 0 0;
  }
  header {
    display: flex;
    justify-content: space-between;
  }
  footer {
    text-align: center;
    border-radius: 0 0 8px 8px;
  }
  main {
    height: 80%;
    padding: 20px;
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

export interface ModalProps {
  header?: any;
  content?: any;
  footer?: string;
}

function Modal({ header, content, footer }: ModalProps) {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <section>
          <header>{header}</header>
          <main>{content}</main>
          <footer>{footer}</footer>
        </section>
      </StyledModal>
    </StyledModalWrapper>
  );
}

export default Modal;
