import { axiosInstance } from "..";
import { iProject } from "../../utils/types";

export const getUserProjects = async () => {
    let status = {
        success: false, data: [] as iProject[]
    }
    await axiosInstance.get("/persons/projects")
        .then((response) => {
            status = { ...status, success: true, data: response.data }
        })
        .catch((error) => { return error })
    return status
}