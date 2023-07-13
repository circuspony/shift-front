import axios from "axios";
import cookies from "../utils/cookies";

export const axiosInstance = axios.create({
    baseURL: "http://kosterror.ru:8081/api/v1",
    headers: {
        common: {
            'Content-Type': 'application/json',
            "Authorization": cookies.get('accessToken') ? "Bearer " + cookies.get('accessToken') : ""
        }
    }
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (originalRequest.url !== "/auth/tokens" && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const response = await axiosInstance.post("/auth/tokens", { refreshToken: cookies.get('refreshToken') })
                const accessToken = response.data.accessToken;
                const refreshToken = response.data.refreshToken;
                axiosInstance.defaults.headers.common[
                    "Authorization"
                ] = "Bearer " + accessToken
                cookies.set('accessToken', accessToken, { path: '/' });
                cookies.set('refreshToken', refreshToken, { path: '/' });

                return axiosInstance({ ...originalRequest, headers: { common: { "Authorization": "Bearer " + accessToken } } });
            }
            catch (_error) {
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);
