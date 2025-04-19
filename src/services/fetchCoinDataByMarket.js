import { axiosInstance } from "../helpers/axiosInstance";

export async function fetchCoinDataByMarket(currency = 'usd', page = 1){
    const perPage = 10;
    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&page=${page}&per_page=${perPage}`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}