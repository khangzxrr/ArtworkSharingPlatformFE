import { bothRolesGet, userAxios } from "../utils/axios"

export const getRequestBidsByRequestId = async (requestId) => {
    const response = await bothRolesGet(`requests/${requestId}/request-bids?sort=id,desc`)

    return response.data
}


export const creatorCreateRequestBid = async (requestId, description, price, duration) => {
    const response = await userAxios.post(`creator/requests/${requestId}/request-bids`, {
        description,
        price,
        duration
    })

    return response.data
}

export const audienceChooseRequestBid = async (requestId, requestBidId) => {
    const response = await userAxios.post(`/audience/requests/${requestId}/request-bids/${requestBidId}/choose`) 

    return response.data
}