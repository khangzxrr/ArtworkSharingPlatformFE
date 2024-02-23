import axios from "axios";
import { BASE_URL } from "./constants";

export const guestAxios = axios.create({ baseURL: BASE_URL})
export const userAxios = axios.create({ baseURL: BASE_URL})