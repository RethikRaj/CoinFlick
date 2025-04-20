import parse from 'html-react-parser';

const CoinDescription = ({coin, currency}) => {
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