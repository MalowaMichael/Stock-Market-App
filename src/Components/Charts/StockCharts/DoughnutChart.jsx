import { Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);



export const PieChart = ({stock}) =>{

  const data = {
    labels: [
      `${stock.symbol} Market Price`, 
      `${stock.symbol} Market change`, 
       
    ],
    datasets: [
      {
        data: [
          `${stock.price}`, 
          `${stock.change}`, 
           
        ],
        backgroundColor: ["#1F2937", "cyan", "yellow", "#3366ff"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",  // Positions legend on the right
        labels: {
          color: "white",   // Makes legend text white
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",  // Dark tooltips
        titleColor: "white",
        bodyColor: "white",
      },
    },
  };

  return (
    <div className="flex flex-col gap-4 w-[94%] m-auto items-center justify-center border border-white h-[70vh]">
      <div className=" border-none border-white w-[80%] h-[80%] ">
      <Doughnut options={options} data={data}/>
    </div>
    </div>
  )

}