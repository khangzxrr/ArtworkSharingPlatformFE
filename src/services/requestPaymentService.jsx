import { userAxios } from "utils/axios"

export const userGetFirstPayment = async (requestId) => {
    const response = await userAxios.get(`audience/requests/${requestId}/request-progresses/first-payment`)

    return response.data
}

export const creatorGetFirstPayment = async (requestId) => {
    const response = await userAxios.get(`creator/requests/${requestId}/request-progresses/first-payment`)

    return response.data
}



export const userGetSecondPayment = async (requestId) => {
    const response = await userAxios.get(`audience/requests/${requestId}/request-progresses/second-payment`)

    return response.data
}

export const creatorGetSecondPayment = async (requestId) => {
    const response = await userAxios.get(`creator/requests/${requestId}/request-progresses/second-payment`)

    return response.data
}



export const payFirstPayment = async (requestId) => {
    const response = await userAxios.post(`/audience/requests/${requestId}/request-progress/first-payment`)

    return response.data
}

export const paySecondPayment = async (requestId) => {
    const response = await userAxios.post(`/audience/requests/${requestId}/request-progress/second-payment`)

    return response.data
}
