import { useForm, FieldValues } from "react-hook-form";
import EmailIcon from "../components/svg/emailicon";
import PasswordIcon from "../components/svg/passwordIcon";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import PersonIcon from "../components/svg/personIcon";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { registerUser } from "../api/requests/registerUser";

function SignUp() {
    const [submitError, setSubmitError] = useState("")

    const { register, formState: { errors }, handleSubmit, watch } = useForm({});
    const { updateUserProfile } = useAuth()

    const password = useRef({});
    password.current = watch("password", "");

    const navigate = useNavigate();
    const onSubmit = async (data: FieldValues) => {
        const responseStatus = await registerUser({
            name: data.name,
            surname: data.surname,
            patronymic: data.patronymic,
            email: data.email,
            password: data.password
        })
        if (responseStatus.success) {
            navigate("/")
            updateUserProfile()
        }
        else {
            setSubmitError(responseStatus.message)
        }
    }
    return (
        <div className="w-full bg-gray-100 min-h-screen">
            <div className="flex w-full max-w-screen-2xl mx-auto">
                <div className='flex flex-col w-full items-center'>
                    <div className="text-3xl mt-4 text-center">
                        Регистрация
                    </div>
                    <div className="flex flex-col w-full sm:w-auto xl:w-1/3 border-custom-gray border-2 sm:rounded-md mt-4 bg-gradient-bg">
                        <div className="mx-auto text-xl mt-4">
                            Заполните необходимые поля
                        </div>
                        {submitError.length ? <p className="text-red-500 mx-auto text-xl mt-4">{submitError}</p> : null}
                        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex items-center mt-4">
                                <div className="w-12 shrink-0 mx-4">
                                    <PersonIcon />
                                </div>
                                <input
                                    className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mr-6"
                                    {...register("name", {
                                        required: "Необходимо ввести имя",
                                        validate: {
                                            capitalNoSpace: (v) =>
                                                v[0] === v.toUpperCase()[0] && v.split(" ").length === 1 || "Имя должно начинаться с заглавной буквы и не содержать пробелов",
                                        },
                                    })}
                                    placeholder="Ваше имя" />
                            </div>
                            {errors?.name?.message ? <p className="ml-20 mt-4 text-red-500 text-sm mr-6">{errors?.name?.message.toString()}</p> : null}

                            <div className="flex items-center mt-4">
                                <div className="w-12 shrink-0 mx-4">
                                    <PersonIcon />
                                </div>
                                <input
                                    className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mr-6"
                                    {...register("patronymic", {
                                        required: "Необходимо ввести отчество",
                                        validate: {
                                            capitalNoSpace: (v) =>
                                                v[0] === v.toUpperCase()[0] && v.split(" ").length === 1 || "Отчество должно начинаться с заглавной буквы и не содержать пробелов",
                                        },
                                    })}
                                    placeholder="Ваше отчество" />
                            </div>
                            {errors?.patronymic?.message ? <p className="ml-20 mt-4 text-red-500 text-sm mr-6">{errors?.patronymic?.message.toString()}</p> : null}
                            <div className="flex items-center mt-4">
                                <div className="w-12 shrink-0 mx-4">
                                    <PersonIcon />
                                </div>
                                <input
                                    className="w-full text-xl p-4 rounded-md border-input-border border-2 outline-none mr-6"
                                    {...register("surname", {
                                        required: "Необходимо ввести фамилию",
                                        validate: {
                                            capitalNoSpace: (v) =>
                                                v[0] === v.toUpperCase()[0] && v.split(" ").length === 1 || "Фамилия должна начинаться с заглавной буквы и не содержать пробелов",
                                        },
                                    })}
                                    placeholder="Ваша фамилия" />
                            </div>
                            {errors?.surname?.message ? <p className="ml-20 mt-4 text-red-500 text-sm mr-6">{errors?.surname?.message.toString()}</p> : null}

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
                            {errors?.email?.message ? <p className="ml-20 mt-4 text-red-500 text-sm mr-6">{errors?.email?.message.toString()}</p> : null}
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
                            {errors?.password?.message ? <p className="ml-20 mt-4 text-red-500 text-sm mr-6">{errors?.password?.message.toString()}</p> : null}
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
                            {errors?.confirmPassword?.message ? <p className="ml-20 mt-4 text-red-500 text-sm mr-6">{errors?.confirmPassword?.message.toString()}</p> : null}
                            <div className="flex w-full pr-6 pl-20 py-4">
                                <Button
                                    type="submit"
                                    className="py-4 text-xl w-full">
                                    <span className="mx-auto">
                                        Зарегистрироваться
                                    </span>
                                </Button>
                            </div>
                        </form>

                        <div className="flex text-xl mb-4 w-full">
                            <span className="text-gray-500 ml-auto ">Уже есть аккаунт?</span>
                            <Link to="/signin" className="text-black ml-2 mr-auto">Войдите</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
