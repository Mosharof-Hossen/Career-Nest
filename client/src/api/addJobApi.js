import axiosInstance from "./axiosInstance";

const addJobApi = async (jobData) => {
    const response = await axiosInstance.post('/add-job', jobData);
    return response.data;
}

export default addJobApi;