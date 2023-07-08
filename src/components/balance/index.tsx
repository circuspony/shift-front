import UserContext from "../../context/userContext";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import Button from "../button/button";
import CoinIcon from "../svg/coinIcon";

function Balance() {
    const { isSignedIn } = useContext(UserContext)
    const [success, setSuccess] = useState(false)
    const { register, formState: { errors }, handleSubmit, setError, reset } = useForm({});
    const onSubmit = (data: FieldValues) => {
        if (data.promo === "777777777777") {
            setSuccess(true)
            reset({ promo: "" })
        }
        else {
            setError('promo', { type: 'custom', message: 'Такого кода не существует!' });
        }
    }

    if (!isSignedIn) {
        return <>
            <Navigate to="/" replace={true}
            />
        </>
    }
    return (
        <div className="flex w-full max-w-screen-2xl mx-auto">
            <div className='flex items-center flex-col w-full'>
                <div className="flex flex-col justify-center w-full sm:w-1/2 xl:w-1/3 h-72 border-custom-gray border-2 sm:rounded-md mt-4 bg-gradient-to-r from-green-200 to-blue-200">
                    {success ? <>
                        <div className="text-3xl mt-4 font-bold text-center">
                            Ура!
                        </div>
                        <div className="flex mx-auto text-3xl mt-4">
                            Вы получили 500
                            <div className="text-normal-text w-9 ml-2">
                                <CoinIcon />
                            </div>
                        </div>
                        <div className="flex text-xl mt-4 mb-4 w-full">
                            <span className="text-gray-500 ml-auto ">Есть еще коды?</span>
                            <span onClick={() => setSuccess(false)} className="text-black cursor-pointer ml-2 mr-auto">Вернуться обратно</span>
                        </div>
                    </> :
                        <>
                            <div className="text-3xl mt-4 text-center">
                                Получите свои монетки!!1
                            </div>
                            <form autoComplete="off" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex items-center mt-4">
                                    <input
                                        className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mx-8"
                                        {...register("promo", {
                                            required: "Заполните поле!",
                                            validate: {
                                                requiredLength: (v) =>
                                                    v.length == 12 || "Промокод должен включать 12 символов"
                                            },
                                        })}
                                        placeholder="Введите свой промокод" />
                                </div>
                                {errors?.promo?.message ? <p className="ml-8 mt-4 text-red-500 text-sm">{errors?.promo?.message.toString()}</p> : null}
                                <div className="flex w-full px-8 py-4">
                                    <Button
                                        type="submit"
                                        addonClass="py-4 text-xl w-full">
                                        <span className="mx-auto">
                                            Отправить код
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

export default Balance
