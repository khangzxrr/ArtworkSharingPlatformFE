import { userAxios } from "../utils/axios"

export const getAllRequestProgressByRequestId = async (requestId) => {
    const response = await userAxios.get(`/audience/requests/${requestId}/request-progresses`)

    return response.data
}