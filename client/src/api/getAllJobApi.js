import axiosInstance from "./axiosInstance"

const getAllJobApi = async () => {
    const response = await axiosInstance.get('/all-jobs');
    return response.data;
}
export default getAllJobApi;