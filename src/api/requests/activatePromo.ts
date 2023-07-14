import { axiosInstance } from "..";
import { iProfile } from "../../utils/types";


export const activatePromo = async (code: string) => {
    let status = { success: false, data: {} as iProfile }
    await axiosInstance.post(`/promo-codes/${code}`)
        .then((response) => {
            status = { ...status, success: true, data: response.data }
        })
    return status
}