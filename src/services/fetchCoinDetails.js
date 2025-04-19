import { axiosInstance } from "../helpers/axiosInstance";

async function fetchCoinDetails(coinId){
    try {
        const response = await axiosInstance.get(`/coins/${coinId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchCoinDetails;