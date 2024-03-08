import axios from "axios";
import { BASE_URL } from "./constants";
import { isContainCreatorRole, isContainUserRole } from "stores/authenticationStore";

export const guestAxios = axios.create({ baseURL: BASE_URL })
export const userAxios = axios.create({ baseURL: BASE_URL })

export const bothRolesPut = async (requestUrl, body) => {
    if (isContainUserRole()) {
        return userAxios.put(`/audience/${requestUrl}`, body)
    }
    else
        if (isContainCreatorRole()) {
            return userAxios.put(`/creator/${requestUrl}`, body)
        }
}

export const bothRolesPost = async (requestUrl, body) => {
    if (isContainUserRole()) {
        return userAxios.post(`/audience/${requestUrl}`, body)
    }
    else
        if (isContainCreatorRole()) {
            return userAxios.post(`/creator/${requestUrl}`, body)
        }
}

export const bothRolesGet = async (requestUrl) => {
    if (isContainUserRole()) {
        return userAxios.get(`/audience/${requestUrl}`)
    }
    else
        if (isContainCreatorRole()) {
            return userAxios.get(`/creator/${requestUrl}`)
        }
}