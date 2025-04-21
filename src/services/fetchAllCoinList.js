import { axiosInstance } from "../helpers/axiosInstance";

async function fetchAllCoinList(){
    try {
        const response = await axiosInstance.get(`/coins/list`);  
        console.log(response.data);     
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}

export default fetchAllCoinList;