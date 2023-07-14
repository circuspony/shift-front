import React, { ReactElement } from 'react';

interface ModalProps {
  visible: boolean;
  title: string;
  content: ReactElement | string;
  footer: ReactElement | string;
  onClose: Function;
}

const Modal = ({ visible = false, content, onClose }: ModalProps) => {
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
      className='fixed bg-black/50 top-0 left-0 bottom-0 w-full z-9999 flex items-center justify-center'
      onClick={() => { onClose() }}
    >
      <div
        className='w-full rounded-md max-w-[550px] bg-white relative mx-5 max-h-[100vh-40px] text-left flex flex-col overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>
  );
};

export default Modal;
