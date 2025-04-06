import { Line } from 'react-chartjs-2'
import {Chart as 
  ChartJs,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,

}
from 'chart.js'
import { useStockContext } from '../../../Context/StockContext'

ChartJs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
)
export const LineChart = ({setChartSelected}) =>{
  const {indices_data, lightMode} = useStockContext()
  if(!indices_data)<p>Loading...</p>
  
  const dates = indices_data[0]?.data?.map(performance => performance.date) || []
    
    //const item = indices_data.map(idx => idx.data)
    console.log("the dates: ", dates)

  const datasets=[
    {
      label:"DJIA",
      data: indices_data[0]?.data?.map(performance => performance.value),
      borderColor: "#1dff42",
      backgroundColor: "rgba(29, 255, 66, 0.5)",
      fill: false
    },
    {
      label: "SPX",
      data: indices_data[1]?.data?.map(performance => performance.value),
      borderColor: "cyan",
      backgroundColor: "rgba(0, 255, 255, 0.5)",
      fill: false,
    },
    {
      label: "IXIC",
      data: indices_data[2]?.data?.map(performance => performance.value),
      borderColor: "#ff5733",
      backgroundColor: "rgba(255, 87, 51, 0.5)",
      fill: false,
    },
    {
      label: "FTSE",
      data: indices_data[3]?.data?.map(performance => performance.value),
      borderColor: "#3366ff",
      backgroundColor: "rgba(51, 102, 255, 0.5)",
      fill: false,
    },
    {
      label: "DAX",
      data: indices_data[4]?.data?.map(performance => performance.value),
      borderColor: "#6B21A8",
      backgroundColor: "rgba(107, 33, 168, 0.5)",
      fill: false,
    },
    {
      label: "N225",
      data: indices_data[5]?.data?.map(performance => performance.value),
      borderColor: "yellow",
      backgroundColor: "rgba(255, 255, 0, 0.5)",
      fill: false,
    },
   
  ]
  
  const data = {
    labels: dates,
    datasets: datasets
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        color:"white"
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Price over time",
          color:"white",
        },
      },
      x: {
        title: {
          display: true,
          text: "Dates in 2025",
          color:"white"
          
        },
      },
    },
  };

  return (
    <div className='relative w-full h-full group overflow-auto'>
        <span className={`absolute inset-0 bg-gray-700 scale-0 -z-10 rounded-[100%] transition-transform duration-1000 ease-out ${lightMode ? "":"group-hover:scale-100"} group-hover:rounded-none`}></span>
        <Line options={options} data={data} className="relative z-10"/>
    </div>
  )
}