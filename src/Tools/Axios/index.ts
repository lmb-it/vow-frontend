import axios from "axios";
import { getEnv } from './helpers';
import { auth } from "Modules";

axios.interceptors.response.use(
    response => response,
    error => {
        return {
            ...error,
            data: {
                pageCode: error.response?.status,
                success: false,
                message: error.response?.data?.message || 'Server Error',
                ...error.response?.data
            }
        };
    }
);

axios.interceptors.request.use(
    async config => {
        // Prefer localStorage: it's written immediately after /login,
        // whereas Redux state is only updated after /me succeeds — so
        // the /me request itself fires before Redux has the token.
        // Also survives page refresh before redux-persist rehydrates.
        const jwt = localStorage.getItem('token') || auth().token;
        config.baseURL = getEnv('VITE_API_URL');
        if (jwt) {
            config.headers.Authorization = `Bearer ${jwt}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default axios;
export * from './helpers';