import axios from 'axios'

// usa a rota do backend
const api = axios.create({
    baseURL: process.env.PORT
});

export const useApi = ()=> ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate', {token});
        return response.data;
    },
    signin: async (email:string, password: string) => {
        const response = await api.post('/signin', {email, password});
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
});