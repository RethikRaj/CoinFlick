import { useParams } from "react-router-dom";
import { useCurrencyStore } from "../store/currencyStore";
import CoinCharts from "../components/CoinCharts/CoinCharts";
import CoinDescription from "../components/CoinDescription/CoinDescription";


function CoinDetails() {
    const currency = useCurrencyStore((state) => state.currency)
    const { id } = useParams();

    return (
        <div className="flex flex-col md:flex-row my-2">

            {/* Coin Description */}
            <div
                className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 md:border-r-2 md:border-b-0 border-gray-500 border-b-2"
            >
                <CoinDescription id={id} currency={currency}/>
            </div>

            {/* Coin Charts */}
            <div className="md:w-2/3 w-full p-10">
                <CoinCharts id={id} currency={currency} />
            </div>

        </div>
    );
}

export default CoinDetails;