import { axiosInstance } from "..";

export const getUserById = async (id: string | undefined) => {
    let status = {
        success: false, data: {
            id: "",
            personRole: "ROLE_USER",
            name: "",
            surname: "",
            patronymic: "",
            avatarId: "",
            email: "",
            money: 0,
            bio: ""
        }
    }
    await axiosInstance.get(`/profiles/${id}`)
        .then((response) => {
            status = { ...status, success: true, data: { ...status.data, ...response.data } }
        })
        .catch((error) => { return error })
    return status
}