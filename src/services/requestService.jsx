import { userAxios } from "../utils/axios";


export const creatorGetRequests = async () => {
    const response = await userAxios.get('/creator/requests?sort=id,desc')

    return response.data
}

export const userGetRequests = async () => {

    const response = await userAxios.get('/audience/requests?sort=id,desc');

    return response.data;
}

export const creatorGetRequest = async (requestId) => {
    const response = await userAxios.get(`/creator/requests/${requestId}`)

    return response.data
}

export const userGetRequest = async (requestId) => {
    const response = await userAxios.get(`/audience/requests/${requestId}`)

    return response.data
}

export const userCreateRequest = async (title, description) => {
    const response = await userAxios.post(`/audience/requests`, {
        title,
        description,
        attachments: []
    })

    return response.data;
}

export const userGetCurrentRequestStep = async (requestId) => {
    const response = await userAxios.get(`/audience/requests/${requestId}/current-step`)

    return response.data
}

export const creatorGetCurrentRequestStep = async (requestId) => {
    const response = await userAxios.get(`/creator/requests/${requestId}/current-step`)

    return response.data
}