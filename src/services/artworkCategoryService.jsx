import { userAxios } from "utils/axios"

export const getAllCategories = async () => {
    const response = await userAxios.get('/artwork-categories')

    return response.data
}