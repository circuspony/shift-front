import { axiosInstance } from "..";

export const approveProjectRequest = async (id: string | undefined, isApproved: boolean) => {
    let status = {
        success: false
    }
    await axiosInstance.put(`/project-requests/${id}?isApproved=${isApproved}`)
        .then(() => {
            status = { ...status, success: true }
        })
        .catch((error) => { return error })
    return status
}