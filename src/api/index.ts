import axios from "axios";
import cookies from "../utils/cookies";

interface RegisterBody {
    name: string
    surname: string
    patronymic: string
    password: string
    email: string
}


const instance = axios.create({
    baseURL: "http://kosterror.ru:8081/api/v1",
    headers: { bearerAuth: cookies.get('token') }
})

export const register = async (body: RegisterBody) => {
    const response = await instance.post("/register", body)
    console.log(response)
    return response
}