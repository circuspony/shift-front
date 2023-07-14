import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Button from "../../button";
import { createPromo } from "../../../api/requests/createPromo";

function PromoGeneration() {
    const [success, setSuccess] = useState(false)
    const [codes, setCodes] = useState([])
    const { register, formState: { errors }, handleSubmit, reset } = useForm({});
    const onSubmit = async (data: FieldValues) => {
        const createPromoStatus = await createPromo({ count: data.count, amount: data.amount })
        if (createPromoStatus.success) {
            setSuccess(true)
            reset({ count: "", amount: "", })
            setCodes(createPromoStatus.codes)
        }
    }
    return (
        <div className="flex w-full max-w-screen-2xl mx-auto">
            <div className='flex items-center flex-col w-full'>
                <div className="flex flex-col justify-center w-1/2 border-custom-gray border-2 sm:rounded-md mt-4 bg-gradient-to-r from-green-200 to-blue-200">
                    {success ? <>
                        <div className="text-3xl mt-4 font-bold text-center">
                            Получены промокоды:
                        </div>
                        <div className="flex flex-col mx-auto text-3xl mt-4">
                            {codes.map(code => <div className="text-xl">{code}</div>)}
                        </div>
                        <div className="flex text-xl mt-4 mb-4 w-full">
                            <span className="text-gray-500 ml-auto ">Создать еще коды?</span>
                            <span onClick={() => {
                                setCodes([])
                                setSuccess(false)
                            }}
                                className="text-black cursor-pointer ml-2 mr-auto">
                                Вернуться обратно
                            </span>
                        </div>
                    </> :
                        <>
                            <div className="text-3xl mt-4 text-center">
                                Создайте код
                            </div>
                            <form autoComplete="off" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex items-center mt-4">
                                    <input
                                        type="number"
                                        className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mx-8"
                                        {...register("count", {
                                            required: "Заполните все поля!",
                                        })}
                                        placeholder="Количество промокодов" />
                                </div>
                                {errors?.count?.message ? <p className="ml-8 mt-4 text-red-500 text-sm">{errors?.count?.message.toString()}</p> : null}
                                <div className="flex items-center mt-4">
                                    <input
                                        type="number"
                                        className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mx-8"
                                        {...register("amount", {
                                            required: "Заполните все поля!",
                                        })}
                                        placeholder="Получаемая сумма монеток" />
                                </div>
                                {errors?.amount?.message ? <p className="ml-8 mt-4 text-red-500 text-sm">{errors?.amount?.message.toString()}</p> : null}
                                <div className="flex w-full px-8 py-4">
                                    <Button
                                        type="submit"
                                        className="py-4 text-xl w-full">
                                        <span className="mx-auto">
                                            Сгенерировать код
                                        </span>
                                    </Button>
                                </div>
                            </form>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default PromoGeneration
