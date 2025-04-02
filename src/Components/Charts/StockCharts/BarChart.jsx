import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);



export const BarChart = ({stock}) => {

  const data = {
    labels: [
      `${stock.symbol} Market Price`, 
      `${stock.symbol} Market change`, 
      `${stock.symbol} Percentage market change`, 
    ] ,//["Apple", "Google", "Amazon", "Microsoft"],
    datasets: [
      {
        label: `${stock.symbol} Stock Data`,
        data: [
          `${stock.price}`, 
          `${stock.change}`, 
          `${stock.percent_change}`, 
           
        ], //[500, 700, 800, 600],
        backgroundColor: ["#1dff42", "cyan", "#ff5733", "#3366ff", "#6B21A8", "yellow"],
      },
    ],
  };

  return <div className="w-[94%] m-auto border border-white">
    <Bar data={data}/>
  </div>
}