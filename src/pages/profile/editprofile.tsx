import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Form from '../../components/profilePage/Form';

const EditProfile: React.FC = () => {
  const [, setFileUrl] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFile: File[]) => {
    setFileUrl(acceptedFile[0].toString());
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,

    maxSize: 5000000
  });

  return (
    <div className='w-full my-24'>
      <div className='w-1/2 my-0 mx-auto border-solid border-b-2'>
        <h1 className='text-6xl pb-8'>Настройки профиля</h1>
        <p className='text-xl w-4/5 pb-2'>
          Вы можете установить имя и фамилию, ввести ссылку на ваш личный сайт и управлять другими
          личными данными.
        </p>
      </div>

      <div className='w-1/2 my-0 mx-auto grid-cols-[1fr_5fr] grid-flow-col md:flex justify-between mt-6 gap-6 items-start'>
        <div className='mt-4 relative text-center'>
          <input {...getInputProps()} />
          <img
            src={"/images/cat.jpg"}
            alt=''
            className='w-36 h-36 mt-8 m-auto rounded-full relative text-center justify-center'
          />
          <p className='font-bold text-base text-center cursor-pointer' {...getRootProps()}>
            Загрузить картинку
          </p>
        </div>
        <div className=''>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
