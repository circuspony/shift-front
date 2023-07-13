import { axiosInstance } from "..";
import { iProject } from "../../utils/types";

export const getProject = async (id: string) => {
    let status = {
        success: false, data: {} as iProject
    }
    await axiosInstance.get(`/projects/${id}`)
        .then((response) => {
            status = { ...status, success: true, data: response.data }
        })
        .catch((error) => { return error })
    return status
}