import axios from "axios"
import { BASE_URL } from "../utils/constants"

export const loginService = async (username, password, rememberMe) => {
    try {

        const response = await axios.post(
            BASE_URL + '/authenticate',
            {
                username,
                password,
                rememberMe
            }
        )

        return response.data.id_token;

    } catch (err) {
        console.log('Error fetching user data: ', err)

        throw err
    }
}