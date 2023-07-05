import React from 'react';
import avatar from '../components/images/cat.jpg';

interface ProfileProps {
  name: string;
  age: number;
  city: string;
  followers: number;
  likes: number;
  photos: number;
}

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='bg-slate-900 w-96 h-auto rounded-2xl'>
        <header>
          <img
            src={avatar}
            alt={props.name}
            className='m-auto w-24 border-solid border-white rounded-full mt-20'
          />
        </header>
        <h1 className='font-bold text-lg text-center text-white p-4'>
          {props.name}{' '}
          <span className='font-normal text-base text-center text-white pb-2'>{props.age}</span>
        </h1>
        <h2 className='font-normal text-base text-center text-white pb-2'>{props.city}</h2>
        <div className='flex text-center items-center justify-center'>
          <div className='followers'>
            <h1 className='font-bold text-lg text-center text-white p-4'>{props.followers}</h1>
            <h2 className='font-normal text-xs text-center tracking-wide text-white pb-5'>
              Подписчики
            </h2>
          </div>
          <div className='followed'>
            <h1 className='font-bold text-lg text-center text-white p-4'>{props.likes}</h1>
            <h2 className='font-normal text-xs text-center tracking-wide text-white pb-5'>
              Подписки
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
