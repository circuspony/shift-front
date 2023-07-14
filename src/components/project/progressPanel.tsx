import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { calculateTime } from '../../utils/calculateTime';
import { iProject } from '../../utils/types';
import Button from '../button';
import ChecListIcon from '../svg/checkListIcon';
import CoinIcon from '../svg/coinIcon';
import { months, projectCategories } from './constants';
import SupportModal from './supportModal';

function ProgressPanel({ project, updateProject }: { project: iProject, updateProject: Function }) {
  const { isSignedIn, userInfo } = useAuth();

  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);

  return (
    <>
      <div className='flex items-center'>
        <span className='text-3xl font-bold'>{project.collectedAmount + ''}</span>
        <div className='text-normal-text w-9 ml-1'>
          <CoinIcon />
        </div>
      </div>
      <div className='flex items-center mt-3 w-full'>
        <span>{'из ' + project.targetAmount}</span>
        <div className='text-normal-text w-5 ml-0.5'>
          <CoinIcon />
        </div>
        <div className='ml-auto'>
          {'Собрано ' + Math.floor((project.collectedAmount * 100) / project.targetAmount) + '%'}
        </div>
      </div>
      <div className='relative h-1.5 mt-3 rounded-md w-full bg-gray-400'>
        <div
          style={{
            width:
              Math.floor((project.collectedAmount * 100) / project.targetAmount) > 100
                ? 100
                : Math.floor((project.collectedAmount * 100) / project.targetAmount) + '%'
          }}
          className={`bg-light-green rounded-md absolute h-1.5`}
        ></div>
      </div>
      <div className='flex itmes-center mt-4 justify-between'>
        <div className='flex flex-col'>
          <div className='font-bold'>{project.sponsors + ' раз'}</div>
          <div className='text-gray-400'>поддержали</div>
        </div>
        <div className='flex flex-col'>
          {new Date(project.finishDate).getTime() > Date.now() && (
            <div className='font-bold'>
              {calculateTime(new Date(project.finishDate).getTime(), Date.now())}
            </div>
          )}
          <div className='text-gray-400'>
            {new Date(project.finishDate).getTime() > Date.now() ? 'осталось' : 'Время вышло'}
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='font-bold'>
            {new Date(project.creationDate).getDate() +
              ' ' +
              months[new Date(project.creationDate).getMonth()] +
              ' ' +
              new Date(project.creationDate).getFullYear()}
          </div>
          <div className='text-gray-400'>запущен</div>
        </div>
      </div>
      {isSignedIn && userInfo.id !== project.authorId ? (
        <>
          <div className='flex w-full mt-4 justify-center relative'>
            <Button className='py-3 text-xl w-full' onClick={() => setModal(true)}>
              <span className='mx-auto'>Поддержать проект</span>
            </Button>
            <SupportModal updateProject={updateProject} id={project?.id} isModal={isModal} onClose={onClose} />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className='flex text-sm items-center mt-4 mx-auto cursor-pointer'>
        <div className='w-4 mr-1'>
          <ChecListIcon />
        </div>
        <div className=''>{projectCategories.find((c) => c.value === project.category)?.label}</div>
      </div>
    </>
  );
}

export default ProgressPanel;
