import { useEffect, useState } from 'react';
import { IoMdPlanet } from 'react-icons/io';
import { MdSettings } from 'react-icons/md';
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { getUserProjects } from '../../api/requests/getUserProjects';
import Button from '../../components/button';
import SmallProjectCard from '../../components/project/projectPanels/smallProjectCard';
import useAuth from '../../hooks/useAuth';
import { iProject } from '../../utils/types';

const Profile = () => {
  const { userInfo } = useAuth();
  const [projects, setProjects] = useState<iProject[]>([])
  const getProjects = async () => {
    const projectsStatus = await getUserProjects()
    if (projectsStatus.success) {
      setProjects(projectsStatus.data)
    }
  }
  useEffect(() => {
    getProjects()
  }, [userInfo])

  return (
    <div className='w-full h-full flex flex-col items-center px-8 md:px-0'>
      <div className='bg-slate-900 w-full md:w-4/5 2xl:w-1/2 min-h-[200px] rounded-2xl'>
        <div className='flex p-4 m-4 relative items-center'>
          <img
            src={userInfo.avatarId ? `http://kosterror.ru:8081/api/v1/files/${userInfo.avatarId}` : '/images/amogus.jpg'}
            alt=''
            className='flex w-36 h-36 border-solid border-white rounded-full'
          />
          <div className='grid justify-items-start ml-6'>
            <h1 className='font-bold text-lg text-center text-white pt-2'>
              {userInfo.name} {userInfo.surname}
            </h1>
            <div className='flex'>
              <Link to={userInfo?.personalWebLink || ""} className='pr-2'>
                <IoMdPlanet size={24} />
              </Link>
              <Link to={userInfo?.instagramLink || ""} className='pr-2'>
                <TiSocialInstagram size={24} />
              </Link>
              <Link to={userInfo?.twitterLink || ""} className=''>
                <TiSocialTwitter size={24} />
              </Link>
              <Link to={userInfo?.facebookLink || ""} className=''>
                <TiSocialFacebook size={24} />
              </Link>
            </div>
            <div className='followers'>
              <h2 className='font-normal text-ls text-center tracking-wide text-white pb-1'>
                Проекты: {projects.length}
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
              {userInfo.bio}{' '}
            </div>
          </div>
          <Link to='/profile/edit' className='text-white absolute top-0 right-0'>
            <MdSettings size={28} />
          </Link>
        </div>
      </div>

      <div className='flex flex-col w-full md:w-4/5 2xl:w-1/2 mb-20'>
        <div className='flex w-full py-4 items-center'>
          <h1 className='text-3xl '>Созданные проекты</h1>
          <Link to='/profile/create' className='text-normal-text font-normal ml-auto'>
            <Button className="flex py-2 px-8 ml-auto">
              <div>{"Создать проект"}</div>
            </Button>
          </Link>
        </div>
        {projects.length !== 0 && <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {projects.map((project) => (
            <SmallProjectCard project={project} />
          ))}
        </div>}
        {projects.length === 0 && <div className='mx-auto mt-8'>Тут ничего нет</div>}
      </div>
    </div>
  );
};

export default Profile;
