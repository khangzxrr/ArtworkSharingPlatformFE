import axios from "axios"
import { BASE_URL } from "../utils/constants"

export const userGetRequests = async () => {

    const response = await axios.get(BASE_URL + '/audience/requests');

    return response.data;
}

export const userCreateRequest = async (title, description) => {
    const response = await axios.post(`${BASE_URL}/audience/requests`, {
        title,
        description,
        attachments: []
    })

    return response.data;
}