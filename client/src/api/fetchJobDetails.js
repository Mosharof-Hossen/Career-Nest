import axiosInstance from "./axiosInstance"

const fetchJobDetails = async (id) => {
    console.log(id);
    const response = await axiosInstance.get(`/job-details/${id}`);
    return response.data;
}

export default fetchJobDetails;