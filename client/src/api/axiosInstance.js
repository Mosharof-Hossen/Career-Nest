import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://careernest.vercel.app",
    withCredentials: true,
})

export default axiosInstance;