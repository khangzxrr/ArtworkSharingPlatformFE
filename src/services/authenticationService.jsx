import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { guestAxios, userAxios } from "../utils/axios";

export const getAuthorize = async () => {
    try {
        const response = await axios.get(BASE_URL + '/authenticate');

        return response.data;

    } catch (err) {
        console.log('Error fetching account ', err);
        throw err;
    }
}

export const login = async (username, password, rememberMe) => {
    try {

        const response = await guestAxios.post(
            BASE_URL + '/authenticate',
            {
                username,
                password,
                rememberMe
            }
        );

        userAxios.interceptors.request.use(config => {
            config.headers.Authorization = "Bearer " + response.data.id_token;

            return config;
        });

        return response.data.id_token;

    } catch (err) {
        console.log('Error fetching user data: ', err)

        throw err
    }
}

export const getAccount = async () => {

    try {
        const response = await userAxios.get(BASE_URL + '/account');

        return response.data;

    } catch (err) {
        console.log('Error fetching account ', err);
        throw err;
    }

}