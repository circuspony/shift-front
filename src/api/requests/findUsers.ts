import { axiosInstance } from "..";

interface iUserSearchBody {
    pagingParams: {
        page: number
        size: number
    },
    name: string,
    surname: string,
    patronymic: string
}

export const findUsers = async (body: iUserSearchBody) => {
    let status = {
        success: false, data: {
            pagingParams: {
                totalPages: 0,
                totalElements: 0,
                page: 0,
                size: 0
            },
            content: []
        }
    }
    await axiosInstance.post("/profiles/search", body)
        .then((response) => {
            status = { ...status, success: true, data: { ...status.data, ...response.data } }
        })
        .catch((error) => { return error })
    return status
}