import { useQuery } from "@tanstack/react-query";
import fetchCoinChartData from "../../services/fetchCoinChartData";
import CustomLineChart from "../Chart/CustomLineChart";
import { DAY_OPTIONS } from "../../helpers/constants";
import { useEffect, useState } from "react";


const CoinCharts = ({id, currency})=>{

    const [days, setDays] = useState(1);
    const [coinInterval, setCoinInterval] = useState("");

    const {isError: isChartError, isLoading : isChartLoading, data : chartData} = useQuery({
        queryKey: ['coinChartData', id, currency, days, coinInterval],
        queryFn: async () => fetchCoinChartData(id, currency, days,coinInterval)
            // return responsedData.prices.map((ele)=>{
            //     return {
            //         name : new Date(ele[0]).toDateString(),
            //         price : Math.round(ele[1]*100)/100
            //     }
            // })
        ,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2
    })

    useEffect(()=>{
        console.log(days);
        console.log(coinInterval);
    },[days, coinInterval])

    const handleChange = (e)=>{
        console.log(typeof e.target.value);
        const daysSelected = e.target.value;
        setCoinInterval(daysSelected == 1 ? "" : "daily");
        setDays(e.target.value);
    }

    if(isChartError){
        return <div>Error while fetching chart data</div>
    }

    if(isChartLoading){
        return <div className="flex justify-center">
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }

    return (
        <>
            <div className="flex justify-center mb-10">
                <select className="select" onChange={handleChange} value={days}>
                    {
                        DAY_OPTIONS.map((day)=>{
                            return (
                                <option 
                                    value={day.value}
                                    key={day.value} 
                                >
                                    {day.label}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            
            <CustomLineChart 
                data={chartData.prices.map((ele)=>{
                    return {
                        name : new Date(ele[0]).toDateString(),
                        price : Math.round(ele[1]*100)/100
                    }
                })} 
                dataKey="price"
            />

            <CustomLineChart 
                data={chartData["market_caps"].map((ele)=>{
                    return {
                        name : new Date(ele[0]).toDateString(),
                        market_caps : Math.round(ele[1]*100)/100
                    }
                })} 
                dataKey="market_caps"
            />

            <CustomLineChart 
                data={chartData["total_volumes"].map((ele)=>{
                    return {
                        name : new Date(ele[0]).toDateString(),
                        total_volumes : Math.round(ele[1]*100)/100
                    }
                })} 
                dataKey="total_volumes"
            />
            
        </>
    )
}

export default CoinCharts;