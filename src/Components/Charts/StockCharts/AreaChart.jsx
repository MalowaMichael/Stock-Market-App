import { Line } from "react-chartjs-2";

import {
  Chart as 
  ChartJs,
  Filler

} from 'chart.js'


ChartJs.register(
  Filler
)

export const AreaChart = ({stock}) => {
  const data = {
    labels: [
      `${stock.symbol} Market Price`, 
      `${stock.symbol} Market change`, 
      `${stock.symbol} Percentage market change`, 
       
    ],
    datasets: [
      {
        label: `${stock.symbol} Stock Data`,
        data: [
          `${stock.price}`, 
          `${stock.change}`, 
          `${stock.percent_change}`, 
            
        ],
        borderColor: "#3366ff",
        backgroundColor: "#6B21A8",
        fill: true, // Enable area shading
      },
    ],
  };
  
  return <div className="w-[94%] m-auto border border-white">
    <Line data={data}/>
  </div>
}