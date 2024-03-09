import { bothRolesGet, userAxios } from "utils/axios"


export const getFirstPaymentByRequestId = async (requestId) => {
    const response = await bothRolesGet(`requests/${requestId}/request-progresses/first-payment`)

    return response.data
}

export const getSecondPaymentByRequestId = async (requestId) => {
    const response = await bothRolesGet(`requests/${requestId}/request-progresses/second-payment`)

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
