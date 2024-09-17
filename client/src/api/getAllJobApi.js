import axiosInstance from "./axiosInstance"

const getAppJobsApi = async () => {
    const response = await axiosInstance.get('/all-jobs');
    return response.data;
}
export default getAppJobsApi;