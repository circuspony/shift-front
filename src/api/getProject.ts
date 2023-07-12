import { axiosInstance } from ".";
import { Project } from "../utils/types";

export const getProject = async (id: string) => {
    let status = {
        success: false, data: {} as Project
    }
    await axiosInstance.get(`/projects/${id}`)
        .then((response) => {
            status = { ...status, success: true, data: response.data }
        })
        .catch((error) => { return error })
    return status
}