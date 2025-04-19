import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCoinDetails from "../services/fetchCoinDetails";
import { useCurrencyStore } from "../store/currencyStore";
import parse from 'html-react-parser';
import fetchCoinChartData from "../services/fetchCoinChartData";
import CustomLineChart from "../components/Chart/CustomLineChart";


function CoinDetails() {
    const currency = useCurrencyStore((state) => state.currency)
    const { id } = useParams();

    const { isLoading: isCoinDetailsLoading, isError: isCoinDetailsError,  data: coin } = useQuery({
        queryKey: ['coinDetails', id],
        queryFn: () => fetchCoinDetails(id),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2
    });

    const {isError: isChartError, isLoading : isChartLoading, data : chartData} = useQuery({
        queryKey: ['coinChartData', id, currency],
        queryFn: async () => {
            const responsedData = await fetchCoinChartData(id, currency);
            return responsedData.prices.map((ele)=>{
                return {
                    name : new Date(ele[0]).toDateString(),
                    price : Math.round(ele[1]*100)/100
                }
            })
        },
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2
    })

    if (isCoinDetailsError) {
        return <div>Error while fetching Coin Details </div>
    }

    if (isCoinDetailsLoading) {
        return <div className="flex justify-center">
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }

    return (
        <div className="flex flex-col md:flex-row my-2">

            <div
                className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 md:border-r-2 md:border-b-0 border-gray-500 border-b-2"
            >
                <img
                    alt={coin?.name}
                    src={coin?.image?.large}
                    className="h-52 mb-5"
                    loading="lazy"
                />

                <h1
                    className="text-4xl font-bold mb-5"
                >
                    {coin?.name}
                </h1>

                <p
                    className="w-full px-6 py-4 text-justify"
                >
                    {parse(coin?.description?.en)}
                </p>

                <div
                    className="w-full flex flex-col items-center md:flex-row md:justify-around"
                >
                    <div
                        className="flex items-center mb-4 md:mb-0"
                    >
                        <h2 className="text-xl font-bold ">
                            Rank
                        </h2>
                        <span className="ml-3 text-xl ">
                            {coin?.market_cap_rank}
                        </span>
                    </div>

                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl text-yellow-400 font-bold ">
                            Current Price
                        </h2>
                        <span className="ml-3 text-xl ">
                            {coin?.market_data.current_price[currency]}
                        </span>
                    </div>

                </div>
            </div>

            <div className="md:w-2/3 w-full p-10">
                {
                    isChartError && <div>Error while fetching chart data</div>
                }

                {isChartLoading && <div className="flex justify-center">
                    <span className="loading loading-spinner text-primary"></span>
                </div>}
                <CustomLineChart data={chartData} dataKey="price"/>
            </div>

        </div>
    );
}

export default CoinDetails;