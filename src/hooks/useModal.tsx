import React, { useCallback, useState } from 'react';
import Modal from '@/src/components/Modal';

interface ModalProps {
  children?: string;
}

const useModal = ({ useBackdrop = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return {
    Modal: isOpen
      ? ({ children }: ModalProps) => <Modal>{children}</Modal>
      : () => null,
    isOpen,
    onClickHandler,
  };
};

export default useModal;
