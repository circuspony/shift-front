import { axiosInstance } from "..";
import { iProject } from "../../utils/types";

interface iSupportData {
    id: string | undefined
    amount: number
}

export const supportProject = async (data: iSupportData) => {
    let status = { success: false, message: "", data: {} as iProject }
    await axiosInstance.post(`/projects/${data.id}/sponsorship?money=${data.amount}`)
        .then((response) => {
            status = { ...status, success: true, data: response.data }
        })
        .catch((error) => {
            status = { ...status, message: error?.response?.data?.message ? error.response.data.message : "Что-то пошло не так" }
        })
    return status
}