
import { useQuery } from "@tanstack/react-query";
import { fetchCoinDataByMarket } from "../../services/fetchCoinDataByMarket";
import { useState } from "react";
import { useCurrencyStore } from "../../store/currencyStore";

function CoinTable() {
    const currency = useCurrencyStore((state)=>state.currency);
    const [page, setPage] = useState(1);
    const { isError, isLoading, error, data } = useQuery({
        queryKey: ['coins', page, currency],
        queryFn: () => fetchCoinDataByMarket(currency, page),
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2, // 2 minutes . Even if cache time is set , data is refetched but ui is updated immediately from cache and if some inconsistencies happen then ui is updated again
        staleTime: 1000 * 60 * 2, // In this time period , data is not refetched because it is considered as fresh 
    })



    return (
       
        <div className="m-2 ">
            <div className="overflow-x-auto bg-black/50">
                <table className="table">
                    {/* head */}
                    <thead className="text-white bg-amber-600">
                        <tr>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>24h change</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && (
                            <tr className="text-center">
                                <td colSpan="4">
                                    <span className="loading loading-spinner text-primary"></span>
                                </td>
                            </tr>
                        )}

                        {isError && (
                            <tr>
                                <td colSpan="4">Error: {error.message}</td>
                            </tr>
                        )}
                        
                        {data && data.map((coin)=>{
                            return (
                                <tr key={coin.id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={coin.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{coin.name}</div>
                                                <div className="text-sm opacity-50">{coin.symbol}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {`${currency === 'usd' ? '$' : '₹'} ${coin.current_price}`}
                                    </td>
                                    <td>{coin.price_change_24h}</td>
                                    <td>{coin.market_cap}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="m-2 flex justify-center">
                <button className="btn btn-primary px-7 text-lg m-2" disabled={page === 1} onClick={()=> setPage((page)=>page-1)}>Prev</button>
                <button className="btn btn-secondary px-7 text-lg m-2" onClick={()=> setPage((page)=>page+1)}>Next</button>
            </div>
        </div>
        
    )
}

export default CoinTable;