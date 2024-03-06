import { userAxios } from "utils/axios"

export const addNewToken = async (token) => {
    const response = await userAxios.post('/account/notify-token', {
      token  
    })

    return response.data
}