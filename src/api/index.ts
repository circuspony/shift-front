import axios from "axios";
import cookies from "../utils/cookies";

export const axiosInstance = axios.create({
    baseURL: "http://kosterror.ru:8081/api/v1",
    headers: {
        'Content-Type': 'application/json',
        "bearerAuth": cookies.get('accessToken') ? cookies.get('accessToken') : ""
    }
})

// Refresh Token Logic
// axiosInstance.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     async function (error) {
//       const originalRequest = error.config;
//       if (error.response.status === 403 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         const resp = await refreshToken();
//         const accessToken = resp.response.data.accessToken;
//         axiosInstance.defaults.headers.common[
//             "bearerAuth"
//         ] = accessToken;
//         return axiosInstance(originalRequest);
//       }
//       return Promise.reject(error);
//     }
//   );
