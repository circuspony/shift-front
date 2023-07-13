import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
// import { HiOutlineMail } from 'react-icons/hi';
import { IoMdPlanet } from 'react-icons/io';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';
import Button from '../button/index.tsx';
import useAuth from '../../hooks/useAuth.ts';
import { updateUser } from '../../api/requests/updateUser.ts';

const Form = (): JSX.Element => {
  const { userInfo, setUserInfo } = useAuth();
  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: userInfo
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const newProfile = {
      ...userInfo,
      name: data.name,
      surname: data.surname,
      patronymic: data.patronymic,
      bio: data.bio,
      personalWebLink: data.personalWebLink,
      facebookLink: data.facebookLink,
      twitterLink: data.twitterLink,
      instagramLink: data.instagramLink
    }
    const updateUserStatus = await updateUser(newProfile)
    if (updateUserStatus.success) {
      setUserInfo({ ...userInfo, ...updateUserStatus.data });
      navigate('/profile');
    }
  };
  return (
    <div className='w-full'>
      <div className=''>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mt-8'>
            <label htmlFor='name' className='block w-full ml-4 font-bold text-3xl'>
              Имя{' '}
            </label>
            <input
              type='text'
              placeholder='Введите ваше имя'
              className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-2 outline-none'
              {...register('name')}
            />
            <div className='mt-8'>
              <label htmlFor='surname' className='block w-full ml-4 font-bold text-3xl'>
                Фамилия{' '}
              </label>
              <input
                type='text'
                placeholder='Введите вашу фамилию'
                className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-2 outline-none'
                {...register('surname')}
              />
            </div>
            <div className='mt-8'>
              <label htmlFor='patronymic' className='block w-full ml-4 font-bold text-3xl'>
                Отчество{' '}
              </label>
              <input
                type='text'
                placeholder='Введите ваше отчество'
                className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-2 outline-none'
                {...register('patronymic')}
              />
            </div>
          </div>
          {/* <div className='mt-8'>
            <label htmlFor='email' className='block w-full ml-4 font-bold text-3xl'>
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
          </div> */}

          <div className='mt-8'>
            <label htmlFor='bio' className='block w-full ml-4 font-bold text-3xl'>
              Описание
            </label>
            <textarea
              id=''
              cols={30}
              rows={6}
              placeholder='Расскажите о себе'
              className='w-full bg-transparent outline-none rounded-2xl p-4 border-solid border-2'
              {...register('bio')}
            ></textarea>
          </div>

          <div className='mt-8'>
            <label htmlFor='website' className='block w-full ml-4 font-bold text-3xl'>
              Сайт
            </label>
            <div className='w-full border-solid border-2 rounded-2xl items-center flex gap-4 mt-2 overflow-hidden'>
              <div className='text-3xl py-2 pl-4 grid cursor-pointer'>
                <IoMdPlanet />
              </div>

              <input
                type='text'
                placeholder='Введите вашу ссылку'
                className='w-full p-4 rounded-2xl bg-transparent outline-none'
                {...register('personalWebLink')}
              />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-4'>
            <div className='mt-8'>
              <label htmlFor='Instragram' className='block w-full ml-4 font-bold text-3xl'>
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
                  {...register('instagramLink')}
                />
              </div>
            </div>
            <div className='mt-8'>
              <label htmlFor='Twitter' className='block w-full ml-4 font-bold text-3xl'>
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
                  {...register('twitterLink')}
                />
              </div>
            </div>

            <div className='mt-8'>
              <label htmlFor='Facebook' className='block w-full ml-4 font-bold text-3xl'>
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
                  {...register('facebookLink')}
                />
              </div>
            </div>
          </div>

          <div className='flex w-full py-4'>
            <Button type='submit' className='py-4 text-xl w-full bg-slate-700'>
              <span className='mx-auto text-white'>Обновить</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
