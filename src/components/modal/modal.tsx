import React, { ReactElement } from 'react';
import Button from '../button';

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
      className='fixed top-0 left-0 bottom-0 w-full z-9999 flex items-center justify-center'
      onClick={onClose}
    >
      <div
        className='w-full max-w-[550px] bg-white relative mx-5 max-h-[100vh-40px] text-left flex flex-col overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='overflow-auto'>
          <div className='p-4'>
            <div className='text-3xl mt-4 text-center'>Поддержать проект</div>
            <form autoComplete='off' className='flex flex-col'>
              <div className='flex items-center mt-4'>
                <input
                  className='w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mx-8'
                  placeholder='Введите сумму'
                />
              </div>

              <div className='flex w-full px-8 py-4'>
                <Button type='submit' className='py-4 text-xl w-full'>
                  <span className='mx-auto'>Отправить</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
