import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineHttp, MdOutlineContentCopy } from 'react-icons/md';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';

//INTERNAL IMPORT
import Button from '../Button/Button.tsx';

const Form = (): JSX.Element => {
  return (
    <div className='w-full'>
      <div className=''>
        <form>
          <div className='mt-8'>
            <label htmlFor='name' className='block w-full ml-4 font-bold text-xl'>
              Username{' '}
            </label>
            <input
              type='text'
              placeholder='Your Username'
              className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-2 outline-none'
            />
          </div>

          <div className='mt-8'>
            <label htmlFor='email' className='block w-full ml-4 font-bold text-xl'>
              Email
            </label>
            <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-4 mt-2 overflow-hidden'>
              <div className='text-3xl py-2 px-4 grid cursor-pointer'>
                <HiOutlineMail />
              </div>
              <input
                type='text'
                placeholder='Email'
                className='w-full p-4 rounded-2xl bg-transparent outline-none'
              />
            </div>
          </div>

          <div className='mt-8'>
            <label htmlFor='description' className='block w-full ml-4 font-bold text-xl'>
              Description
            </label>
            <textarea
              name=''
              id=''
              cols={30}
              rows={6}
              placeholder='Something about yourself in few words'
              className='w-full bg-transparent outline-none rounded-2xl p-4 border-solid border-2'
            ></textarea>
          </div>

          <div className='mt-8'>
            <label htmlFor='website'>Website</label>
            <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-4 mt-2 overflow-hidden'>
              <div className='text-3xl py-2 px-4 grid cursor-pointer'>
                <MdOutlineHttp />
              </div>

              <input
                type='text'
                placeholder='Website'
                className='w-full p-4 rounded-2xl bg-transparent outline-none'
              />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-4'>
            <div className='mt-8'>
              <label htmlFor='facebook'>Facebook</label>
              <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-4 mt-2 overflow-hidden'>
                <div className='text-3xl py-2 px-4 grid cursor-pointer'>
                  <TiSocialFacebook />
                </div>
                <input
                  type='text'
                  placeholder='Your Link'
                  className='w-full p-4 rounded-2xl bg-transparent outline-none'
                />
              </div>
            </div>
            <div className='mt-8'>
              <label htmlFor='Twitter'>Twitter</label>
              <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-4 mt-2 overflow-hidden'>
                <div className='text-3xl py-2 px-4 grid cursor-pointer'>
                  <TiSocialTwitter />
                </div>
                <input
                  type='text'
                  placeholder='Your Link'
                  className='w-full p-4 rounded-2xl bg-transparent outline-none'
                />
              </div>
            </div>
            <div className='mt-8'>
              <label htmlFor='Instragram'>Instragram</label>
              <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-4 mt-2 overflow-hidden'>
                <div className='text-3xl py-2 px-4 grid cursor-pointer'>
                  <TiSocialInstagram />
                </div>
                <input
                  type='text'
                  placeholder='Your Link'
                  className='w-full p-4 rounded-2xl bg-transparent outline-none'
                />
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <label htmlFor='wallet'>Wallet address</label>
            <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-4 mt-2 overflow-hidden'>
              <div className='text-3xl py-2 px-4 grid cursor-pointer'>
                <MdOutlineHttp />
              </div>
              <input
                type='text'
                placeholder='0xEA674fdDe714fd979de3EdF0F56AAgre4fgB898ec8'
                className='w-full p-4 rounded-2xl bg-transparent outline-none'
              />
              <div className='text-3xl py-2 px-4 grid cursor-pointer'>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className='my-16 mx-0'>
            {/* <Button children='Upload profile'/> */}
            <Button>Upload profile</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
