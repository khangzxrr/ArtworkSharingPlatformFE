import { bothRolesGet, userAxios } from "../utils/axios"


export const getRequestProgressesByRequestId = async (requestId) => {
    const response = await bothRolesGet(`requests/${requestId}/request-progresses`)

    return response.data
}

export const creatorCreateRequestProgress = async (requestId, description, attachments, type = 'REPORT') => {
    const response = await userAxios.post(`/creator/requests/${requestId}/request-progresses/reports`, {
        description,
        attachments,
        type
    })

    return response.data
}