import { useForm, FieldValues } from "react-hook-form";
import EmailIcon from "../components/svg/emailicon";
import PasswordIcon from "../components/svg/passwordIcon";
import ButtonWrapper from "../components/inputs/buttonWrapper";
import { Link, useNavigate, Navigate } from "react-router-dom";
import UserContext from "../components/context/userContext";
import { useContext, useRef } from "react";
import Cookies from 'universal-cookie';
import PersonIcon from "../components/svg/personIcon";

function SignUp() {
    const { register, formState: { errors }, handleSubmit, watch } = useForm({});
    const { isSignedIn, setIsSignedIn } = useContext(UserContext)

    const password = useRef({});
    password.current = watch("password", "");


    const navigate = useNavigate();
    const onSubmit = (data: FieldValues) => {
        console.log(data)
        const cookies = new Cookies();
        cookies.set('token', '123', { path: '/' });
        navigate("/")
        setIsSignedIn(true)
    }
    if (isSignedIn) {
        return <>
            <Navigate to="/" replace={true}
            />
        </>
    }
    return (
        <div className="flex w-full max-w-screen-2xl mx-auto">
            <div className='flex flex-col w-full items-center'>
                <div className="text-3xl mt-4 text-center">
                    Регистрация
                </div>
                <div className="flex flex-col w-full sm:w-auto xl:w-1/3 border-custom-gray border-2 sm:rounded-md mt-4 bg-gradient-bg">
                    <div className="mx-auto text-xl mt-4">
                        Заполните необходимые поля
                    </div>

                    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center mt-4">
                            <div className="w-12 shrink-0 mx-4">
                                <PersonIcon />
                            </div>
                            <input
                                className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mr-6"
                                {...register("firstName", {
                                    required: "Необходимо ввести имя"
                                })}
                                placeholder="Ваше имя" />
                        </div>
                        {errors?.firstName?.message ? <p className="ml-20 mt-4 text-red-500 text-sm">{errors?.firstName?.message.toString()}</p> : null}

                        <div className="flex items-center mt-4">
                            <div className="w-12 shrink-0 mx-4">
                                <PersonIcon />
                            </div>
                            <input
                                className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mr-6"
                                {...register("middleName")}
                                placeholder="Ваше отчество" />
                        </div>

                        <div className="flex items-center mt-4">
                            <div className="w-12 shrink-0 mx-4">
                                <PersonIcon />
                            </div>
                            <input
                                className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mr-6"
                                {...register("lastName", {
                                    required: "Необходимо ввести фамилию"
                                })}
                                placeholder="Ваша фамилия" />
                        </div>
                        {errors?.lastName?.message ? <p className="ml-20 mt-4 text-red-500 text-sm">{errors?.lastName?.message.toString()}</p> : null}

                        <div className="flex items-center mt-4">
                            <div className="w-12 shrink-0 mx-4">
                                <EmailIcon />
                            </div>
                            <input
                                type="email"
                                className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mr-6"
                                {...register("email", {
                                    required: "Email обязателен",
                                    validate: {
                                        maxLength: (v) =>
                                            v.length <= 50 || "Адрес должен быть короче 50 символов",
                                        matchPattern: (v) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                            "Некорректный формат электронной почты",
                                    },
                                })}
                                placeholder="Email" />
                        </div>
                        {errors?.email?.message ? <p className="ml-20 mt-4 text-red-500 text-sm">{errors?.email?.message.toString()}</p> : null}
                        <div className="flex items-center mt-4">
                            <div className="w-12 shrink-0 mx-4">
                                <PasswordIcon />
                            </div>
                            <input
                                type="password"
                                className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mr-6"
                                {...register("password", {
                                    required: "Пароль обязателен",
                                    validate: {
                                        minLength: (v) =>
                                            v.length > 8 || "Пароль должен быть длиннее 8 символов",
                                    },
                                })}
                                placeholder="Пароль" />
                        </div>
                        {errors?.password?.message ? <p className="ml-20 mt-4 text-red-500 text-sm">{errors?.password?.message.toString()}</p> : null}
                        <div className="flex items-center mt-4">
                            <div className="w-12 shrink-0 mx-4">
                                <PasswordIcon />
                            </div>
                            <input
                                type="password"
                                className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mr-6"
                                {...register("confirmPassword", {
                                    required: "Проверка обязательна",
                                    validate: {
                                        minLength: (v) =>
                                            v.length > 8 || "Пароль должен быть длиннее 8 символов",
                                        passwordMatch: (v) =>
                                            v === password.current || "Пароли не совпадают",
                                    },
                                })}
                                placeholder="Подтвердите пароль" />
                        </div>
                        {errors?.confirmPassword?.message ? <p className="ml-20 mt-4 text-red-500 text-sm">{errors?.confirmPassword?.message.toString()}</p> : null}
                        <div className="flex w-full pr-6 pl-20 py-4">
                            <ButtonWrapper
                                type="submit"
                                addonClass="py-4 text-xl w-full">
                                <span className="mx-auto">
                                    Зарегистрироваться
                                </span>
                            </ButtonWrapper>
                        </div>
                    </form>

                    <div className="flex text-xl mb-4 w-full">
                        <span className="text-gray-500 ml-auto ">Уже есть аккаунт?</span>
                        <Link to="/signin" className="text-black ml-2 mr-auto">Войдите</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
