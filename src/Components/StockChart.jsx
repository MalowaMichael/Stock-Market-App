import {Line} from 'react-chartjs-2'
import {Chart as
  ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { useEffect, useState } from 'react'
import axios from 'axios'

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
export const StockChart = () => {
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const getStockData = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await axios.get("https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/quotes?ticker=AAPL%2CMSFT%2C%5ESPX%2C%5ENYA%2CGAZP.ME%2CSIBN.ME%2CGEECEE.NS", {
          headers :{
            "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
            "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          }
        })

        console.log("The stocks retrieved are: ", response.data)

        const stocks = response.data?.body;


        if(!stocks || stocks.length === 0){
          setError("No stocks data available");
          setLoading(false)
          return;
        }

        const datasets = stocks.map((stock, index) => {
          const stockName = stock.symbol || `Stock ${index + 1}`
          return ({
            label:stockName,
            data:[stock.regularMarketPrice],
            borderColor:"blue",
            backgroundColor:"indigo",
          })
        })

        const labels = stocks.map((stock) => stock.symbol)
        setChartData({
          labels,
          datasets,
        })

        setLoading(false)

      } catch (error) {
        console.log("Error fetching stock data: ", error)
        setError("Failed to fetch stock data.")
        setLoading(false)
      }
    }

    getStockData()
  }, [setChartData, setError])

  //chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.dataset.label}: $${context.raw.toFixed(2)}`,
      },
    },
    title: {
      display:true,
      text:"Current Stock Prices",
      font:{
        size:16,
      },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Stock Price (KES)" } },
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-500 rounded-md">
        <p>{error}</p>
      </div>
    )
  }
  return <>
  {chartData ? (
        <Line options={options} data={chartData}></Line>

  ) :(
    <p>Loading data...</p>
  ) }
  </>
}
