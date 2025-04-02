import { Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useStockContext } from "../../../Context/StockContext";

ChartJS.register(ArcElement, Tooltip, Legend);


export const PieChart = () =>{
 const {indices_data} = useStockContext()
const dates = indices_data[0]?.data?.map(point => point.date)
  const datasets = [
    {
      label:"DJIA",
      data: indices_data[0]?.data?.map(performance => performance.value),
      backgroundColor: "rgba(29, 255, 66, 0.5)"
    },
    {
      label:"SPX",
      data: indices_data[1]?.data?.map(performance => performance.value),
      backgroundColor: "rgba(0, 255, 255, 0.5)"
    },
    {
      label: "IXIC",
      data: indices_data[2]?.data?.map(performance => performance.value),
      backgroundColor: "rgba(255, 87, 51, 0.5)"
    },
    {
      label: "FTSE",
      data: indices_data[3]?.data?.map(performance => performance.value),
      backgroundColor: "rgba(51, 102, 255, 0.5)"
    },
    {
      label: "DAX",
      data: indices_data[4]?.data?.map(performance => performance.value),
      backgroundColor: "rgba(107, 33, 168, 0.5)"
    },
    {
      label: "N225",
      data: indices_data[5]?.data?.map(performance => performance.value),
      backgroundColor: "rgba(255, 255, 0, 0.5)"
    },
  ]

  const data = {
    labels: dates,
    datasets: datasets
  }

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
    <div className="w-full h-[60vh] ">
      <Pie data={data} options={options} />
    </div>
  )
}