import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineHttp } from 'react-icons/md';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';

//INTERNAL IMPORT
import ButtonWrapper from '../inputs/buttonWrapper.tsx';

const Form = (): JSX.Element => {
  return (
    <div className='w-full'>
      <div className=''>
        <form>
          <div className='mt-8'>
            <label htmlFor='name' className='block w-full ml-4 font-bold text-xl'>
              Имя{' '}
            </label>
            <input
              type='text'
              placeholder='Введите ваше имя'
              className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-2 outline-none'
            />
            <div className='mt-8'>
              <label htmlFor='name' className='block w-full ml-4 font-bold text-xl'>
                Фамилия{' '}
              </label>
              <input
                type='text'
                placeholder='Введите вашу фамилию'
                className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-2 outline-none'
              />
            </div>
          </div>
          <div className='mt-8'>
            <label htmlFor='email' className='block w-full ml-4 font-bold text-xl'>
              Почта
            </label>
            <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-2 mt-2 overflow-hidden'>
              <div className='text-3xl py-2 pl-4 grid cursor-pointer'>
                <HiOutlineMail />
              </div>
              <input
                type='text'
                placeholder='Введите вашу почту'
                className='w-full p-4 rounded-2xl bg-transparent outline-none'
              />
            </div>
          </div>

          <div className='mt-8'>
            <label htmlFor='description' className='block w-full ml-4 font-bold text-xl'>
              Описание
            </label>
            <textarea
              name=''
              id=''
              cols={30}
              rows={6}
              placeholder='Расскажите о себе'
              className='w-full bg-transparent outline-none rounded-2xl p-4 border-solid border-2'
            ></textarea>
          </div>

          <div className='mt-8'>
            <label htmlFor='website' className='block w-full ml-4 font-bold text-xl'>
              Сайт
            </label>
            <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-4 mt-2 overflow-hidden'>
              <div className='text-3xl py-2 pl-4 grid cursor-pointer'>
                <MdOutlineHttp />
              </div>

              <input
                type='text'
                placeholder='Введите вашу ссылку'
                className='w-full p-4 rounded-2xl bg-transparent outline-none'
              />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-4'>
            <div className='mt-8'>
              <label htmlFor='Facebook' className='block w-full ml-4 font-bold text-xl'>
                Facebook
              </label>
              <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-2 mt-2 overflow-hidden'>
                <div className='text-3xl py-2 pl-4 grid cursor-pointer'>
                  <TiSocialFacebook />
                </div>
                <input
                  type='text'
                  placeholder='Ваша ссылка'
                  className='w-full p-4 rounded-2xl bg-transparent outline-none'
                />
              </div>
            </div>
            <div className='mt-8'>
              <label htmlFor='Twitter' className='block w-full ml-4 font-bold text-xl'>
                Twitter
              </label>
              <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-2 mt-2 overflow-hidden'>
                <div className='text-3xl py-2 pl-4 grid cursor-pointer'>
                  <TiSocialTwitter />
                </div>
                <input
                  type='text'
                  placeholder='Ваша ссылка'
                  className='w-full p-4 rounded-2xl bg-transparent outline-none'
                />
              </div>
            </div>
            <div className='mt-8'>
              <label htmlFor='Instragram' className='block w-full ml-4 font-bold text-xl'>
                Instragram
              </label>
              <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-2 mt-2 overflow-hidden'>
                <div className='text-3xl py-2 pl-4 grid cursor-pointer'>
                  <TiSocialInstagram />
                </div>
                <input
                  type='text'
                  placeholder='Ваша ссылка'
                  className='w-full p-4 rounded-2xl bg-transparent outline-none'
                />
              </div>
            </div>
          </div>

          <div className='flex w-full py-4'>
            <ButtonWrapper type='submit' addonClass='py-4 text-xl w-full'>
              <span className='mx-auto'>Обновить</span>
            </ButtonWrapper>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
