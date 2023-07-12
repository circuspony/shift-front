import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  visible: boolean;
  title: string;
  content: ReactElement | string;
  footer: ReactElement | string;
  onClose: () => void;
}

const Modal = ({ visible = false, title = '', content = '', footer = '', onClose }: ModalProps) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  if (!visible) return null;

  return (
    <div
      className='fixed top-0 left-0 w-full z-9999 flex items-center justify-center'
      onClick={onClose}
    >
      <div
        className='w-full max-w-[550px] bg-white relative mx-5 max-h-[100vh-40px] text-left flex flex-col overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex items-center p-4'>
          <h3 className='m-0'>{title}</h3>
          <span className='cursor-pointer p-4 m-auto' onClick={onClose}>
            &times;
          </span>
        </div>
        <div className='overflow-auto'>
          <div className='p-4'>{content}</div>
        </div>
        {footer && <div className='flex items-center p-4'>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
