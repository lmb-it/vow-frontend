import axios from 'Tools/Axios';
import URLs from 'Services/URLs';

const AuthServices = {
    login: async (data: { email?: string; password: string }) => {
        const res = await axios.post(URLs.auth.login, data);
        return res.data;
    },

    logout: async () => {
        const res = await axios.post(URLs.auth.logout);
        return res.data;
    },

    me: async () => {
        const res = await axios.post(URLs.auth.me);
        return res.data;
    },

    updateMe: async (data: Record<string, any>) => {
        const res = await axios.patch(URLs.auth.updateMe, data);
        return res.data;
    },

    changePassword: async (data: Record<string, any>) => {
        const res = await axios.post(URLs.auth.password, data);
        return res.data;
    },
};

export default AuthServices;
