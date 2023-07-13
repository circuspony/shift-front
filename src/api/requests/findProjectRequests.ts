import { axiosInstance } from "..";

interface iProjectRequestSearchBody {
    page: number
    size: number
}

export const findProjectRequests = async (body: iProjectRequestSearchBody) => {
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
    await axiosInstance.post("/project-requests", body)
        .then((response) => {
            status = { ...status, success: true, data: { ...status.data, ...response.data } }
        })
        .catch((error) => { return error })
    return status
}