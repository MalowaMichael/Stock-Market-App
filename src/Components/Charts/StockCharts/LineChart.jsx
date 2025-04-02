import {Line} from 'react-chartjs-2'
import {
  Chart as 
  ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend

} from 'chart.js'


ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)



 const LineChart = ({stock}) => {
  /*if (!stock || !stock.history || stock.history.length === 0) {
    return <p>Loading chart...</p>;
  } else{
    console.log('Stock data for chart available')
  }*/

  const data = {
    labels: `${stock.regularMarketPrice} `,//stock?.history.map((entry) => entry.date),
    datasets: [
      {
        label: `${stock.symbol} Stock volume`,
        data: `${stock.regularMarketVolume}`,//stock?.history.map((entry) => entry.close),
        borderColor: "#1dff42",
        backgroundColor: "#e0e0e0",
        //fill:false
      }
    ]
  }
  return (
    <Line data={data}/>
  )
}
export default LineChart