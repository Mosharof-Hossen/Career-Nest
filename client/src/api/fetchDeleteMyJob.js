import axiosInstance from "./axiosInstance"

const fetchDeleteMyJob = async (data) => {
    console.log(data);
    const response = await axiosInstance.delete("/my-job", {data:data});
    return response.data;
}

export default fetchDeleteMyJob;