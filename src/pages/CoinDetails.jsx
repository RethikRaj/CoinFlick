import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCoinDetails from "../services/fetchCoinDetails";

function CoinDetails(){

    const { id } = useParams();

    const {isLoading, isError, error, data} = useQuery({
        queryKey: ['coinDetails',id],
        queryFn: ()=> fetchCoinDetails(id),
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2
    });

    if(isError){
        return <div>Error while fetching Coin Details : {error} </div>
    }

    if(isLoading){
        return <div className="flex justify-center">
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }

    return (
        <div>
            CoinDetails : {data.id}
        </div>
    );
}

export default CoinDetails;