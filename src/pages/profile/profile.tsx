import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../components/images/cat.jpg';

interface ProfileProps {
  name: string;
  age: number;
  // city: string;
  followers: number;
  likes: number;
  photos: number;
}

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='bg-slate-900 w-1/2 h-auto rounded-2xl grid grid-cols-2'>
        <div>
          <header>
            <img
              src={avatar}
              alt={props.name}
              className='m-auto w-36 h-36 border-solid border-white rounded-full mt-20'
            />
          </header>
          <h1 className='font-bold text-lg text-center text-white p-2'>
            {props.name}{' '}
            <span className='font-normal text-base text-center text-white pb-2'>{props.age}</span>
          </h1>
          {/* // <h2 className='font-normal text-base text-center text-white pb-2'>{props.city}</h2> */}
          <div className='flex text-center items-center justify-center'>
            <div className='followers'>
              <h1 className='font-bold text-lg text-center text-white p-4'>{props.followers}</h1>
              <h2 className='font-normal text-xs text-center tracking-wide text-white pb-5'>
                Проекты
              </h2>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center mr-2'>
          <div className='flex flex-end text-xl mt-4 mb-8 w-full'>
            <Link to='/editprofile' className='text-white ml-auto'>
              Настройки
            </Link>
          </div>
          <label htmlFor='description' className='block w-full ml-4 font-bold text-xl text-white'>
            Описание
          </label>
          <textarea
            name=''
            id=''
            cols={30}
            rows={6}
            placeholder=''
            className='w-full bg-transparent outline-none rounded-2xl p-4 border-solid border-2'
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Profile;
