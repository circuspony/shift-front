import { axiosInstance } from "..";

export const changeUserRole = async (id: string | undefined, role: string) => {
    let status = {
        success: false
    }
    await axiosInstance.put(`/persons/${id}/role?role=${role}`)
        .then(() => {
            status = { ...status, success: true }
        })
        .catch((error) => { return error })
    return status
}