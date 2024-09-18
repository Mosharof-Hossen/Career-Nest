import axiosInstance from "./axiosInstance"

const fetchApplicationCheck = async (data) => {
    const response = await axiosInstance.post("/application-check", data);
    return response.data;
}

export default fetchApplicationCheck;