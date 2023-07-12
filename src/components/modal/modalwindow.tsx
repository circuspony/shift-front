import React from 'react';
import Modal from './modal';

const ModalWindow = () => {
  const [isModal, setModal] = React.useState(false);
  const onClose = () => setModal(false);
  return (
    <React.Fragment>
      <button onClick={() => setModal(true)}>Клик-клик-клик</button>
      <Modal
        visible={isModal}
        title='Заголовок'
        content={<p>Что-то важное</p>}
        footer={<button onClick={onClose}>Закрыть</button>}
        onClose={onClose}
      />
    </React.Fragment>
  );
};

export default ModalWindow;
