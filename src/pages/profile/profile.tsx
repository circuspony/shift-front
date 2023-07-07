import React, { useState, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext, { UserContextProvider } from '../../components/context/userContext';
import { MdSettings } from 'react-icons/md';
import { IoMdPlanet } from 'react-icons/io';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';
import avatar from '../../components/images/cat.jpg';

interface ProfileProps {
  firstname: string;
  lastname: string;
  age: number;
  city: string;
  followers: number;
  likes: number;
  photos: number;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const { userInfo } = useContext(UserContext);

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='bg-slate-900 w-1/3 min-h-[200px] rounded-2xl'>
        <div className='flex p-4 m-4 relative items-center'>
          <img
            src={avatar}
            alt=''
            className='flex w-36 h-36 border-solid border-white rounded-full'
          />
          <div className='grid justify-items-start ml-6'>
            <h1 className='font-bold text-lg text-center text-white pt-2'>
              {userInfo.firstname} {userInfo.lastname}
            </h1>
            <div className='flex'>
              <Link to={userInfo.personalWebLink} className='pr-2'>
                <IoMdPlanet size={24} />
              </Link>
              <Link to={userInfo.instagramLink} className='pr-2'>
                <TiSocialInstagram size={24} />
              </Link>
              <Link to={userInfo.twitterLink} className=''>
                <TiSocialTwitter size={24} />
              </Link>
              <Link to={userInfo.facebookLink} className=''>
                <TiSocialFacebook size={24} />
              </Link>
            </div>
            <div className='followers'>
              <h2 className='font-normal text-ls text-center tracking-wide text-white pb-1'>
                Проекты {props.followers}
              </h2>
            </div>
            {/* <div className='font-normal text-base text-center text-white pb-2'>{props.age}</div> */}
            {/* <h2 className='font-normal text-base text-center text-white pb-2'>{props.city}</h2> */}
            {/* <div className='flex flex-col text-center items-center'></div> */}

            {/* <label htmlFor='description' className='block w-full font-bold text-xl text-white'>
              Обо мне
            </label> */}
            <div className='font-normal text-xs tracking-wide text-white'>
              {' '}
              {userInfo.description}{' '}
            </div>
          </div>
          <Link to='/editprofile' className='text-white absolute top-0 right-0'>
            <MdSettings size={28} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
