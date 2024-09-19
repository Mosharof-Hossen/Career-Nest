import axiosInstance from "./axiosInstance"

const fetchMyJobs = async (email) => {
    const response = await axiosInstance.get(`/my-jobs?email=${email}`);
    return response.data;
}
export default fetchMyJobs