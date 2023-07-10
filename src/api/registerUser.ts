import { axiosInstance } from ".";
import cookies from "../utils/cookies";

interface RegisterBody {
    name: string
    surname: string
    patronymic: string
    password: string
    email: string
}

export const registerUser = async (body: RegisterBody) => {
    let status = { success: false, message: "" }
    await axiosInstance.post("/auth/register", body)
        .then((response) => {
            cookies.set('accessToken', response.data.accessToken, { path: '/' });
            cookies.set('refreshToken', response.data.refreshToken, { path: '/' });
            status = { ...status, success: true }
        })
        .catch((error) => {
            status = { ...status, message: error?.response?.data?.message ? error.response.data.message : "Что-то пошло не так" }
        })
    return status
}