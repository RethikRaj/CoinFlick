import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQuery } from "@tanstack/react-query";
import fetchCoinChartData from '../../services/fetchCoinChartData';
import { useCurrencyStore } from '../../store/currencyStore';


function Chart({id}) {
  const currency = useCurrencyStore((state)=>state.currency);

  const {isError, isLoading, data : chartData} = useQuery({
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

  if(isError){
    return <div>Error while fetching Coin Chart Data </div>
  }

  if(isLoading){
    return <div className="flex justify-center"><span className="loading loading-spinner text-primary"></span></div>
  }
  
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
                top: 5,
                right: 30,
                left: 60,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={['dataMin - 10', 'dataMax + 10']}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
  
}

export default Chart;