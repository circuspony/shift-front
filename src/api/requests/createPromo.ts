import { axiosInstance } from "..";

interface iPromocodeCreateBody {
    count: number
    amount: number
}

export const createPromo = async (body: iPromocodeCreateBody) => {
    let status = { success: false, codes: [] }
    await axiosInstance.post("/promo-codes", body)
        .then((response) => {
            status = { ...status, success: true, codes: response.data }
        })
    return status
}