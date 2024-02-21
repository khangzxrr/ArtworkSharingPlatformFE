import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useAuthenticationStore } from "../stores/authenticationStore";

export const loginService = async (username, password, rememberMe) => {
    try {

        const response = await axios.post(
            BASE_URL + '/authenticate',
            {
                username,
                password,
                rememberMe
            }
        );

        axios.interceptors.request.use(config => {
            config.headers.Authorization = "Bearer " + response.data.id_token;

            return config;
        });

        return response.data.id_token;

    } catch (err) {
        console.log('Error fetching user data: ', err)

        throw err
    }
}

export const registerService = async (data) => {
  try {
    const response = await axios.post(BASE_URL + "/register", data);

    axios.interceptors.request.use((config) => {
      config.headers.Authorization = "Bearer " + response.data.id_token;

      return config;
    });

    return response.data.id_token;
  } catch (err) {
    console.log("Error fetching user data: ", err);

    throw err;
  }
};

export const getAccount = async () => {

    try {
        const response = await axios.get(BASE_URL + '/account');

        return response.data;

    } catch (err) {
        console.log('Error fetching account ', err);
        throw err;
    }
    

    


}