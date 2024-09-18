import axiosInstance from "./axiosInstance"

const fetchPostApplicantInfo = async (info) => {
    const response = await axiosInstance.post('/applications', info)
    return response.data;
}
export default fetchPostApplicantInfo