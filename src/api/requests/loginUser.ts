import { axiosInstance } from "..";
import cookies from "../../utils/cookies";

interface iLoginBody {
    password: string
    email: string
}

export const loginUser = async (body: iLoginBody) => {
    let status = { success: false, message: "" }
    await axiosInstance.post("/auth/login", body)
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