import { userAxios } from "utils/axios"

export const UserCreateChatMessage = async (requestId, message) => {

    const response = await userAxios.post(`/audience/requests/${requestId}/chats`, {
        message
    })

    return response.data
}

export const CreatorCreateChatMessage = async (requestId, message) => {

    const response = await userAxios.post(`/creator/requests/${requestId}/chats`, {
        message
    })

    return response.data
}

export const UserGetAllMessage = (requestId, afterId) => userAxios.get(`/audience/requests/${requestId}/chats?afterId=${afterId}`)

export const CreatorGetAllMessage = (requestId, afterId) => userAxios.get(`/creator/requests/${requestId}/chats?afterId=${afterId}`)