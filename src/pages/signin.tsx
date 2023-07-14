import { useForm, FieldValues } from "react-hook-form";
import EmailIcon from "../components/svg/emailicon";
import PasswordIcon from "../components/svg/passwordIcon";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { loginUser } from "../api/requests/loginUser";

function SignIn() {
  const [submitError, setSubmitError] = useState("")

  const { register, formState: { errors }, handleSubmit } = useForm({});
  const { updateUserProfile } = useAuth()
  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    const responseStatus = await loginUser({
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
        <div className='flex items-center flex-col w-full'>
          <div className="text-3xl mt-4 text-center">
            Добро пожаловать!
          </div>
          <div className="flex flex-col w-full sm:w-auto xl:w-1/3 border-custom-gray border-2 sm:rounded-md mt-4 bg-gradient-bg">
            <div className="mx-auto text-xl mt-4">
              Заполните необходимые поля
            </div>
            {submitError.length ? <p className="text-red-500 mx-auto text-xl mt-4">{submitError}</p> : null}
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
              <div className="flex w-full pr-6 pl-20 py-4">
                <Button
                  type="submit"
                  className="py-4 text-xl w-full">
                  <span className="mx-auto">
                    Войти
                  </span>
                </Button>
              </div>
            </form>

            <div className="flex text-xl mb-4 w-full">
              <span className="text-gray-500 ml-auto ">Нет аккаунта?</span>
              <Link to="/signup" className="text-black ml-2 mr-auto">Зарегистрируйтесь</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
