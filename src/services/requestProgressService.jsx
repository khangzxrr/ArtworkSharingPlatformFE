import { userAxios } from "../utils/axios"

export const userGetAllRequestProgressByRequestId = async (requestId) => {
    const response = await userAxios.get(`/audience/requests/${requestId}/request-progresses`)

    return response.data
}

export const creatorGetAllRequestProgressByRequestId = async (requestId) => {
    const response = await userAxios.get(`/creator/requests/${requestId}/request-progresses`)

    return response.data
}

export const creatorCreateRequestProgress = async (requestId, description, attachments, type) => {
    const response = await userAxios.post(`/creator/requests/${requestId}/request-progresses/reports`, {
        description,
        attachments,
        type
    })

    return response.data
}