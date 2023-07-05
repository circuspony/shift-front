import { useForm, FieldValues } from 'react-hook-form';
import EmailIcon from '../components/svg/emailicon';
import PasswordIcon from '../components/svg/passwordIcon';
import ButtonWrapper from '../components/inputs/buttonWrapper';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../components/context/userContext';
import { useContext } from 'react';
import Cookies from 'universal-cookie';

function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({});
  const { setIsSignedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    const cookies = new Cookies();
    cookies.set('token', '123', { path: '/' });
    navigate('/');
    setIsSignedIn(true);
  };
  return (
    <div className='flex flex-col mx-auto'>
      <div className='text-3xl text-center'>Войти в аккаунт</div>
      <div className='border-custom-grey border-2 rounded-md mt-4 bg-gradient-bg'>
        <div className='ml-20 text-3xl mt-4'>Добро пожаловать!</div>
        <div className='ml-20 text-xl mt-4'>Заполните поля</div>

        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center mt-4'>
            <div className='w-16 h-16 mx-4'>
              <EmailIcon />
            </div>
            <input
              type='email'
              className='w-full max-w-2xl text-xl p-4 rounded-md border-input-border border-2 outline-none mr-8'
              {...register('email', {
                required: 'Email обязателен',
                validate: {
                  maxLength: (v) => v.length <= 50 || 'Адрес должен быть короче 50 символов',
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    'Некорректный формат электронной почты'
                }
              })}
              placeholder='Email'
            />
          </div>
          {errors?.email?.message ? (
            <p className='ml-20 mt-4 text-red-500 text-sm'>{errors?.email?.message.toString()}</p>
          ) : null}
          <div className='flex items-center mt-4'>
            <div className='w-16 h-16 mx-4'>
              <PasswordIcon />
            </div>
            <input
              type='password'
              className='w-full max-w-2xl text-xl p-4 rounded-md border-input-border border-2 outline-none mr-8'
              {...register('password', {
                required: 'Пароль обязателен',
                validate: {
                  minLength: (v) => v.length > 8 || 'Пароль должен быть длиннее 8 символов'
                }
              })}
              placeholder='Пароль'
            />
          </div>
          {errors?.password?.message ? (
            <p className='ml-20 mt-4 text-red-500 text-sm'>
              {errors?.password?.message.toString()}
            </p>
          ) : null}
          <div className='flex w-full pr-8 pl-20 py-4'>
            <ButtonWrapper type='submit' addonClass='py-4 text-xl w-full'>
              <span className='mx-auto'>Войти</span>
            </ButtonWrapper>
          </div>
        </form>

        <div className='flex text-xl mt-4 mb-8 w-full'>
          <span className='text-gray-500 ml-auto '>Нет аккаунта?</span>
          <Link to='/signup' className='text-black ml-2 mr-auto'>
            Зарегистрируйтесь
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
