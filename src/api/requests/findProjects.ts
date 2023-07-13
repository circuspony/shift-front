import { axiosInstance } from "..";

interface iProjectSearchBody {
    pagingParams: {
        page: number
        size: number
    },
    filteringParams: {
        title: string
        category: string
        status: string
    },
    sorting: {
        title: string
        creationDate: string
        targetAmount: string
        category: string
        status: string
    }
}

export const findProjects = async (body: iProjectSearchBody) => {
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
    await axiosInstance.post("/projects/search", body)
        .then((response) => {
            status = { ...status, success: true, data: { ...status.data, ...response.data } }
        })
        .catch((error) => { return error })
    return status
}