import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import Button from '../button/button.tsx';
import useAuth from '../../hooks/useAuth.ts';
import Countries from './Country.tsx';
import Categories from './categories.tsx';
import UploadAndDisplayImage from './uploadimages.tsx';

const ProjectForm = (): JSX.Element => {
  const { userInfo, setUserInfo } = useAuth();
  const {
    // formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: userInfo
  });
  const navigate = useNavigate();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    navigate('/profile');
    setUserInfo({
      ...userInfo,
      firstname: data.firstname,
      lastname: data.lastname,
      description: data.description,
      personalWebLink: data.personalWebLink,
      facebookLink: data.facebookLink,
      twitterLink: data.twitterLink,
      instagramLink: data.instagramLink
    });
  };

  return (
    <div className='w-full'>
      <div className=''>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 gap-4'>
            <div className='mt-8'>
              <label htmlFor='name' className='block w-full ml-4 font-bold text-3xl'>
                Название проекта{' '}
              </label>
              <input
                type='text'
                placeholder='Введите название вашего проекта'
                className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-2 outline-none'
              />
            </div>
            <div className='mt-8 flex flex-col justify-end'>
              <Categories />
            </div>
          </div>
          <div className=''>
            {/* <label htmlFor='email' className='block w-full ml-4 font-bold text-3xl'>
              Почта
            </label> */}
            <div className='w-full border-solid border-2 rounded-2xl items-center flex mt-6 overflow-hidden'>
              <textarea
                cols={30}
                rows={6}
                placeholder='Опишите кратко идею вашего проекта'
                className='w-full p-4 rounded-2xl bg-transparent outline-none'
              />
            </div>
          </div>

          <div className='mt-6'>
            <textarea
              id=''
              cols={30}
              rows={8}
              placeholder='Опишите ваш проект в полном объёме'
              className='w-full bg-transparent outline-none rounded-2xl p-4 border-solid border-2'
            ></textarea>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className=''>
              <input
                type='text'
                placeholder='Введите необходимую сумму сбора'
                className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-4 outline-none'
              />
            </div>
            <div className=''>
              <Countries />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className=''>
              <input
                type='text'
                placeholder='Дата начала сборов'
                className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-4 outline-none'
              />
            </div>
            <div className=''>
              <input
                type='text'
                placeholder='Дата окончания сборов'
                className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-4 outline-none'
              />
            </div>
          </div>

          <div className='w-full flex mt-4 relative text-center justify-center'>
            <div className='flex flex-col'>
              <UploadAndDisplayImage />
            </div>
          </div>

          <div className='flex w-full py-4'>
            <Button type='submit' addonClass='py-4 text-xl w-full bg-slate-700'>
              <span className='mx-auto text-white'>Обновить</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
