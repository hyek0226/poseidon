import React, { useCallback, useState } from 'react';
import Modal from '@/src/components/Modal';
import type { ModalProps } from '@/src/components/Modal';

const useModal = (useBackdrop?: boolean, open?: boolean) => {
  const [isOpen, setIsOpen] = useState(open);

  const onClickHandler = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return {
    Modal: isOpen
      ? (props: ModalProps) => <Modal {...props}></Modal>
      : () => null,
    isOpen,
    onClickHandler,
  };
};

export default useModal;
