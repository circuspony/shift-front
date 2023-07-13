import { axiosInstance } from "..";

interface iProjectCreateBody {
    title: string
    summary: string
    description: string
    targetAmount: number
    category: string
    finishDate: Date
    avatarId: string
    attachmentIds: string[]
}

export const createProject = async (body: iProjectCreateBody) => {
    let status = { success: false, message: "" }
    await axiosInstance.post("/projects", body)
        .then(() => {
            status = { ...status, success: true }
        })
        .catch((error) => {
            status = { ...status, message: error?.response?.data?.message ? error.response.data.message : "Что-то пошло не так" }
        })
    return status
}