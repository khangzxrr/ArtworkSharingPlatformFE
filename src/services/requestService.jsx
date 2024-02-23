import { userAxios } from "../utils/axios";


export const creatorGetRequests = async () => {
    const response = await userAxios.get('/creator/requests')

    return response.data
}

export const userGetRequests = async () => {

    const response = await userAxios.get('/audience/requests');

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