import ProjectForm from '../../components/profilePage/projectForm.tsx';

function ProjectCreate() {
  return (
    <div className='w-full my-24'>
      <div className='w-1/2 my-0 mx-auto border-solid border-b-2'>
        <h1 className='text-6xl pb-8'>Создайте ваш проект</h1>
        <p className='text-xl w-4/5 pb-2'>
          Вы можете установить имя и фамилию, ввести ссылку на ваш личный сайт и управлять другими
          личными данными.
        </p>
      </div>

      <div className='w-1/2 my-0 mx-auto grid-cols-[1fr_5fr] grid-flow-col justify-between mt-6 gap-6 items-start'>
        <div className=''>
          <ProjectForm />
        </div>
      </div>
    </div>
  );
}

export default ProjectCreate;
