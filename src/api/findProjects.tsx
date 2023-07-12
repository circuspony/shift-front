import { axiosInstance } from ".";

interface ProjectSearchBody {
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

interface ProjectSearchResponse {
    pagingParams: {
        totalPages: number
        totalElements: number
        page: number
        size: number
    },
    content:
    {
        id: string
        title: string,
        summary: string,
        targetAmount: string,
        collectedAmount: string,
        avatarId: string
        creationDate: string
        finishDate: string
        category: string
        status: string
        authorId: string
        isApproved: boolean
    }[]
}
export const findProjects = async (body: ProjectSearchBody) => {
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