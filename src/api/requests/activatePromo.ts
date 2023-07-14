import { axiosInstance } from "..";


export const activatePromo = async (code: string) => {
    let status = { success: false, data: [] }
    await axiosInstance.post(`/promo-codes/${code}`)
        .then((response) => {
            status = { ...status, success: true, data: response.data }
        })
    return status
}