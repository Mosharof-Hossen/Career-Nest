import axiosInstance from "./axiosInstance"


const fetchUpdateJobApplicationNumber = async (info) => {
    const data = { jobApplicationNumber: info.jobApplicationNumber }
    const response = await axiosInstance.put(`/job/${info._id}`, data);
    return response.data
}

export default fetchUpdateJobApplicationNumber;