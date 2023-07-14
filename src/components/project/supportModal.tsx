import { useEffect, useState } from "react";
import { supportProject } from "../../api/requests/supportProject";
import useAuth from "../../hooks/useAuth"
import Button from "../button"
import Modal from "../modal/modal"
import { useForm, FieldValues } from "react-hook-form";
import PiggyIcon from "../svg/piggyIcon";
import CoinIcon from "../svg/coinIcon";


function SupportModal({ id, isModal, onClose, updateProject }: { id: string | undefined, isModal: boolean, onClose: Function, updateProject: Function }) {
    const { userInfo, updateUserProfile } = useAuth()
    const [success, setSuccess] = useState(false)
    const { register, formState: { errors }, handleSubmit, setError, getValues } = useForm({});

    const onSubmit = async (data: FieldValues) => {
        const supportStatus = await supportProject({
            id: id,
            amount: data.amount
        })
        if (supportStatus.success) {
            updateUserProfile()
            updateProject(supportStatus.data)
            setSuccess(true)
        }
        else {
            setError('amount', { type: 'custom', message: 'Что-то пошло не так на сервере :(' });
        }
    }
    useEffect(() => {
        setSuccess(false)
    }, [isModal])

    return (
        <>
            <Modal
                visible={isModal}
                title='Заголовок'
                content={<div className='overflow-auto'>
                    {success &&
                        <div className='flex flex-col p-4'>
                            <div className='text-3xl font-bold mt-4 text-center'>Спасибо!</div>
                            <span className='mx-auto flex items-center text-xl mt-4 text-center'>
                                {"Ваши " + getValues("amount")}
                                <div className="h-5 mr-2">
                                    <CoinIcon />
                                </div>
                                {" точно не пропадут зря!"}
                            </span>
                            <div className='w-56 mx-auto my-4'><PiggyIcon /></div>
                        </div>}
                    {!success &&
                        <div className='p-4'>
                            <div className='text-3xl mt-4 font-bold text-center'>Поддержать проект</div>
                            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='flex flex-col'>
                                <div className='flex items-center mt-4'>
                                    <input
                                        type="number"
                                        {...register("amount", {
                                            required: "Введите сумму!",
                                            validate: {
                                                tooMuch: (v) =>
                                                    v < userInfo.money || "На балансе недостаточно средств",
                                            },
                                        })}
                                        className='appearance-none w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mx-8'
                                        placeholder='Введите сумму'
                                    />
                                </div>
                                {errors?.amount?.message ? <p className="ml-8 mt-4 text-red-500 text-sm">{errors?.amount?.message.toString()}</p> : null}
                                <div className='flex w-full px-8 py-4'>
                                    <Button type='submit' className='py-4 text-xl w-full'>
                                        <span className='mx-auto'>Отправить</span>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    }
                </div>
                }
                footer={<Button onClick={() => { onClose() }}>Закрыть</Button>}
                onClose={onClose}
            />
        </>
    )
}

export default SupportModal
