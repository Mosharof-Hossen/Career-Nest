import axiosInstance from "./axiosInstance"

const fetchUpdatePut = async (data) => {
    const response = await axiosInstance.put("/update", data);
    return response.data;
}

export default fetchUpdatePut;