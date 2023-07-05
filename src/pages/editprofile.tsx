import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// import images from ";
import From from '../components/ProfilePage/Form.tsx';

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
    <div className='w-full m-24'>
      <div className='w-1/2 my-0 mx-auto border-solid border-b-2'>
        <h1 className='text-6xl pb-8'>Profile settings</h1>
        <p className='text-xl w-4/5 pb-2'>
          You can set preferred display name, create your profile URL and manage other personal
          settings.
        </p>
      </div>

      <div className='w-1/2 my-0 mx-auto grid grid-cols-2 mt-6 gap-6 items-start'>
        <div className='mt-4 cursor-pointer relative text-center' {...getRootProps()}>
          <input {...getInputProps()} />

          <p className='font-bold text-base'>Change Image</p>
        </div>
        <div className=''>
          <From />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
