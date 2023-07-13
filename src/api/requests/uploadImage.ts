import { axiosInstance } from "..";

export const uploadImage = async (file: File) => {
    let status = { success: false, avatarId: "" }
    await axiosInstance.post("/files", { file: file }, { headers: { "Content-Type": "multipart/form-data" } })
        .then((response) => {
            status = { ...status, success: true, avatarId: response.data.id }
        })
        .catch((error) => { return error })
    return status
}