import axiosInstance from "./axiosInstance";

const fetchGetAppliedJob = async (email)=>{
    const response = await axiosInstance.get(`/applied-job/${email}`)
    return response.data;
}

export default fetchGetAppliedJob;