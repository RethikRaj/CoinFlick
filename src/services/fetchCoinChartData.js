import { axiosInstance } from "../helpers/axiosInstance";

const fetchCoinChartData = async (id, currency, days = 30, interval="daily")=>{
    try {
        const response = await axiosInstance.get(`/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchCoinChartData;