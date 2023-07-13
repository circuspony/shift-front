import React from 'react';
import Modal from './modal';
import Button from '../button';

const ModalWindow = () => {
  const [isModal, setModal] = React.useState(false);
  const onClose = () => setModal(false);

  return (
    <div>
      <Button
        className='py-3 text-xl w-[336px] text-center justify-center'
        onClick={() => setModal(true)}
      >
        Поддержать проект
      </Button>
      <Modal
        visible={isModal}
        title='Заголовок'
        content={<p>Что-то важное</p>}
        footer={<Button onClick={onClose}>Закрыть</Button>}
        onClose={onClose}
      />
    </div>
  );
};

export default ModalWindow;
