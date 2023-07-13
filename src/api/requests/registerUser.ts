import { axiosInstance } from "..";
import cookies from "../../utils/cookies";

interface iRegisterBody {
    name: string
    surname: string
    patronymic: string
    password: string
    email: string
}

export const registerUser = async (body: iRegisterBody) => {
    let status = { success: false, message: "" }
    await axiosInstance.post("/auth/register", body)
        .then((response) => {
            cookies.set('accessToken', response.data.accessToken, { path: '/' });
            cookies.set('refreshToken', response.data.refreshToken, { path: '/' });
            axiosInstance.defaults.headers.common[
                "Authorization"
            ] = "Bearer " + response.data.accessToken;
            status = { ...status, success: true }
        })
        .catch((error) => {
            status = { ...status, message: error?.response?.data?.message ? error.response.data.message : "Что-то пошло не так" }
        })
    return status
}