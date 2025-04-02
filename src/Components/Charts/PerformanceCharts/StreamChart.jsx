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


export const StreamChart = () =>{
  const {indices_data} = useStockContext()
  const dates = indices_data[0]?.data?.map(point => point.date)

  const datasets=[
    {
      label:"DJIA",
      data: indices_data[0]?.data?.map(performance => performance.value),
      borderColor: "#1dff42",
      backgroundColor: "rgba(29, 255, 66, 0.5)",
      fill: true
    },
    {
      label: "SPX",
      data: indices_data[1]?.data?.map(performance => performance.value),
      borderColor: "cyan",
      backgroundColor: "rgba(0, 255, 255, 0.5)",
      fill: true,
    },
    {
      label: "IXIC",
      data: indices_data[2]?.data?.map(performance => performance.value),
      borderColor: "#ff5733",
      backgroundColor: "rgba(255, 87, 51, 0.5)",
      fill: true,
    },
    {
      label: "FTSE",
      data: indices_data[3]?.data?.map(performance => performance.value),
      borderColor: "#3366ff",
      backgroundColor: "rgba(51, 102, 255, 0.5)",
      fill: true,
    },
    {
      label: "DAX",
      data: indices_data[4]?.data?.map(performance => performance.value),
      borderColor: "#6B21A8",
      backgroundColor: "rgba(107, 33, 168, 0.5)",
      fill: true,
    },
    {
      label: "N225",
      data: indices_data[5]?.data?.map(performance => performance.value),
      borderColor: "yellow",
      backgroundColor: "rgba(255, 255, 0, 0.5)",
      fill: true,
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
        stacked: true,
          
      },
      x: {
          stacked: true,          
          
      },
    },
  };

  return (
    <div className=' w-full h-full relative group'>
      <span className='absolute inset-0 bg-gray-700 scale-0 -z-10 rounded-[100%] transition-transform ease-out duration-1000 group-hover:scale-100 group-hover:rounded-none'></span>
      <Line data={data} options={options}/>
    </div>
  )
}