import axios from "axios";
import { BACKEND_URL } from "../constants";
import { ACCCESS_TOKEN } from "../constants";

const api = axios.create({
    baseURL: BACKEND_URL,
});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem(ACCCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export default api;
