import axiosInstance from "./axiosInstance"

const fetchJobDetails = async (id) => {
    const response = await axiosInstance.get(`/job-details/${id}`);
    return response.data;
}

export default fetchJobDetails;