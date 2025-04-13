import axios from 'axios';
import { COIN_GECKO_BASE_API_URL } from './constants';

export const axiosInstance = axios.create({
    baseURL : `${COIN_GECKO_BASE_API_URL}`
})