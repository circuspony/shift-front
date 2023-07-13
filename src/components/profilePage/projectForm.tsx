import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../api/requests/createProject.ts';
import Button from '../button/index.tsx';
import Categories from './categories.tsx';
import UploadAndDisplayImage from './uploadimages.tsx';
import { uploadImage } from '../../api/requests/uploadImage.ts';

const ProjectForm = (): JSX.Element => {
  const { register, setValue, formState: { errors }, handleSubmit } = useForm({});
  const [finishDate, setFinishDate] = useState(new Date());

  const navigate = useNavigate();
  useEffect(() => {
    register("category", {
      value: "",
      validate: {
        noValue: (o) =>
          o.length !== 0 || "Категория должна быть выбрана",
      },
    })
    register("avatarId", {
      value: null,
      validate: {
        noValue: (v) =>
          v !== null || "Главное изображение должно быть выбрано",
      },
    })
    register("attachmentIds", {
      value: [],
    })
  }, [])

  const onSubmit = async (data: FieldValues) => {
    console.log("data");
    console.log(data);
    const avatarUploadStatus = await uploadImage(data.avatarId)
    if (avatarUploadStatus.success) {
      const attachments = await Promise.all(
        data.attachmentIds.map((image: File) => {
          return uploadImage(image)
        }))

      const createProjectStatus = await createProject({
        title: data.title,
        summary: data.summary,
        description: data.description,
        targetAmount: data.targetAmount,
        category: data.category,
        finishDate: finishDate,
        avatarId: avatarUploadStatus.avatarId,
        attachmentIds: attachments.map((attachment) => attachment.avatarId)
      })
      if (createProjectStatus.success) {
        navigate('/profile');
      }
    }
  };
  return (
    <div className='w-full'>
      <div className=''>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 gap-4'>
            <div className='mt-8'>
              <label htmlFor='name' className='block w-full ml-4 font-bold text-3xl'>
                Название проекта
              </label>
              <input
                {...register("title", {
                  required: "Необходимо ввести название проекта"
                })}
                placeholder='Введите название вашего проекта'
                className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-2 outline-none'
              />
            </div>
            <div className='mt-8 flex flex-col justify-end'>
              <Categories setCategory={(obj: { value: string, label: string }) => { setValue('category', obj.value) }} />
            </div>
          </div>
          {errors?.title?.message ? <p className="ml-4 mt-4 text-red-500 text-sm">{errors?.title?.message.toString()}</p> : null}
          {errors?.category?.message ? <p className="ml-4 mt-4 text-red-500 text-sm">{errors?.category?.message.toString()}</p> : null}

          <div className=''>
            <label htmlFor='email' className='block w-full mt-4 ml-4 font-bold text-3xl'>
              Описание
            </label>
            <div className='w-full border-solid border-2 rounded-2xl items-center flex mt-6 overflow-hidden'>
              <textarea
                cols={30}
                rows={6}
                {...register("summary", {
                  required: "Необходимо ввести описание проекта"
                })}
                placeholder='Опишите кратко идею вашего проекта'
                className='w-full p-4 rounded-2xl bg-transparent outline-none'
              />
            </div>
          </div>
          {errors?.summary?.message ? <p className="ml-4 mt-4 text-red-500 text-sm">{errors?.summary?.message.toString()}</p> : null}
          <div className='mt-6'>
            <textarea
              id=''
              cols={30}
              rows={8}
              {...register("description", {
                required: "Необходимо ввести полное описание проекта"
              })}
              placeholder='Опишите ваш проект в полном объёме'
              className='w-full bg-transparent outline-none rounded-2xl p-4 border-solid border-2'
            ></textarea>
          </div>
          {errors?.description?.message ? <p className="ml-4 mt-4 text-red-500 text-sm">{errors?.description?.message.toString()}</p> : null}
          <div className='grid grid-cols-1 gap-4'>
            <div className=''>
              <label htmlFor='email' className='block w-full mt-4 ml-4 font-bold text-3xl'>
                Сумма сбора
              </label>
              <input
                type='number'
                {...register("targetAmount", {
                  required: "Необходимо ввести необходимую сумму сбора"
                })}
                placeholder='Введите необходимую сумму сбора'
                className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-4 outline-none'
              />
            </div>
          </div>

          <div className='grid w-full'>
            <div className='w-full'>
              <label htmlFor='email' className='block w-full mt-4 ml-4 font-bold text-3xl'>
                Дата окончания
              </label>
              <DatePicker wrapperClassName="w-full" className='w-full border-solid border-2 p-4 rounded-2xl bg-transparent mt-4 outline-none' selected={finishDate} onChange={(date: Date) => setFinishDate(date)} />
            </div>
          </div>
          <label htmlFor='email' className='block w-full mt-4 ml-4 font-bold text-3xl'>
            Главное изображение
          </label>
          <div className='w-full flex mt-4 relative text-center justify-center'>
            <UploadAndDisplayImage setAttachments={(images: File[]) => { setValue('avatarId', images[0]) }} />
          </div>
          {errors?.avatarId?.message ? <p className="ml-4 mt-4 text-red-500 text-sm">{errors?.avatarId?.message.toString()}</p> : null}
          <label htmlFor='email' className='block w-full mt-4 ml-4 font-bold text-3xl'>
            Дополнительные изображения
          </label>
          <div className='w-full flex mt-4 relative text-center justify-center'>
            <UploadAndDisplayImage multiple setAttachments={(images: File[]) => { setValue('attachmentIds', images) }} />
          </div>

          <div className='flex w-full py-4'>
            <Button type='submit' className='py-4 text-xl w-full bg-slate-700'>
              <span className='mx-auto text-white'>Создать</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
