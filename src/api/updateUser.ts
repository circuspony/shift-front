import { axiosInstance } from ".";
import { Profile } from "../utils/types";

export const updateUser = async (body: Profile) => {
    let status = {
        success: false, data: {
            id: "",
            personRole: "ROLE_USER",
            name: "",
            surname: "",
            patronymic: "",
            email: "",
            money: 0,
            bio: ""
        }
    }
    await axiosInstance.put("/profiles", body)
        .then((response) => {
            status = { ...status, success: true, data: { ...status.data, ...response.data } }
        })
        .catch((error) => { return error })
    return status
}