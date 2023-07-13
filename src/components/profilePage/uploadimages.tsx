import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Button from '../button';

const UploadAndDisplayImage = ({ setAttachments, multiple = false }: { setAttachments: Function, multiple?: boolean }) => {
  const [images, setImages] = useState([] as any);
  const [imageURLS, setImageURLs] = useState([]);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: any = [];
    images.forEach((image: any) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
    setAttachments(images)
  }, [images]);

  function onImageChange(e: any) {
    setImages([...e.target.files]);
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full'>
        <Button
          onClick={(e) => {
            e.stopPropagation()
            if (inputRef?.current) {
              inputRef?.current.click()
            }
          }}
          type="button"
          className='py-4 text-xl w-1/3 bg-slate-700'>
          <span className='mx-auto text-white'>Загрузить изображения</span>
        </Button>
      </div>
      <input
        ref={inputRef}
        type='file'
        multiple={multiple}
        accept='image/*'
        onChange={onImageChange}
        className='flex justify-center hidden'
      />
      <div className='mt-4 flex flex-wrap w-full justify-center gap-4'>
        {imageURLS.map((imageSrc) => (
          <img src={imageSrc} alt='not found' width={'250px'} />
        ))}
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;
