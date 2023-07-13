import { useState, useEffect } from 'react';

const UploadAndDisplayImage = () => {
  const [images, setImages] = useState([] as any);
  const [imageURLS, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: any = [];
    images.forEach((image: any) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e: any) {
    setImages([...e.target.files]);
  }

  return (
    <>
      <input
        type='file'
        multiple
        accept='image/*'
        onChange={onImageChange}
        className='flex justify-center'
      />
      <div className='mt-4 flex flex-wrap justify-center gap-4'>
        {imageURLS.map((imageSrc) => (
          <img src={imageSrc} alt='not found' width={'250px'} />
        ))}
      </div>
    </>
  );
};

export default UploadAndDisplayImage;
