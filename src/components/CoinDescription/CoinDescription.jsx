import parse from 'html-react-parser';
import fetchCoinDetails from '../../services/fetchCoinDetails';
import useFetch from '../../hooks/useFetch';
import Alert from '../Alert/Alert';

const CoinDescription = ({id, currency}) => {

    const { isLoading: isCoinDescriptionLoading, isError: isCoinDescriptionError,  data: coin } = useFetch('coinDetails', fetchCoinDetails, [id]);

    if (isCoinDescriptionError) {
        return <Alert message="Error fetching coin details" type="error" />
    }

    if (isCoinDescriptionLoading) {
        return <div className="flex justify-center">
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }

    return (
        <>
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
        </>
        
    )
}

export default CoinDescription;