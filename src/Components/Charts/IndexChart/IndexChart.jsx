/*import { Line } from "react-chartjs-2"
import {Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,

} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
)*/

import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid} from 'recharts'
export const IndexChart = ({index, indexData}) =>{

  /*const dates = indexData.map(index => index.date)
  const data = {
    labels: dates,
    datasets:[
      {
        label: `${index.symbol} Prices`,
        data: indexData.map(item => item.value),
        borderColor: `${index.border}`,
        backgroundColor: `${index.background}`,
        tension: 0.4, 
      
      },

    ]
  }

  const options ={
    responsive: true,
    plugins:[
      {
        legend: {
          display:true,
          position:"left",

        },
        title: {
          display:true,
          text: "Index performance over time"
        }
      }
    ]
  }*/
  return (

 <ResponsiveContainer>
  <LineChart data={indexData}>
    <XAxis dataKey={indexData.date} />
    <YAxis hide/>
    <Tooltip/>
    <Line type="monotone" dataKey="value" stroke="#1dff42" strokeWidth = {2} dot={false} />
    <CartesianGrid stroke='#' strokeDasharray="5 5"/>
  </LineChart>
 </ResponsiveContainer>
  )
}
