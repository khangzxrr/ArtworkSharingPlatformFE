import { userAxios } from "../utils/axios"

export const userGetAllRequestProgressByRequestId = async (requestId) => {
    const response = await userAxios.get(`/audience/requests/${requestId}/request-progresses`)

    return response.data
}

export const creatorGetAllRequestProgressByRequestId = async (requestId) => {
    const response = await userAxios.get(`/creator/requests/${requestId}/request-progresses`)

    return response.data
}