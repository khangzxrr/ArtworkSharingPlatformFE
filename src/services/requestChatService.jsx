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

export const UserGetAllRequestChats = async (requestId) => {

    const response = await userAxios.get(`/audience/requests/${requestId}/chats`)

    return response.data
}

export const CreatorGetAllRequestChats = async (requestId) => {
    const response = await userAxios.get(`/creator/requests/${requestId}/chats`)

    return response.data
}