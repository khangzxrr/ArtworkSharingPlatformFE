import { userAxios } from "../utils/axios"

export const creatorGetRequestBidsOfRequest = async (requestId) =>  {
    const response = await userAxios.get(`/creator/request/${requestId}/request-bids?sort=id,desc`)

    return response.data
}

export const userGetRequestBidsOfRequest = async (requestId) => {
    const response = await userAxios.get(`/audience/requests/${requestId}/request-bids?sort=id,desc`)

    return response.data
}

export const creatorCreateRequestBid = async (requestId, description, price, duration) => {
    const response = await userAxios.post(`creator/request/${requestId}/request-bids`, {
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