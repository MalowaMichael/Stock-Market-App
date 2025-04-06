import { LineChart } from "../Components/Charts/PerformanceCharts/LineChart"
import { PieChart } from "../Components/Charts/PerformanceCharts/PieChart";
import { StreamChart } from "../Components/Charts/PerformanceCharts/StreamChart"
import { useStockContext } from "../Context/StockContext";
import {motion} from 'framer-motion'
const historical_range = [
  {id: 0, time: "1 mth"},
  {id: 1, time: "1 wk"},
  {id: 2, time: "24 hrs"},
  {id: 3, time: "12 hrs"},
  {id: 4, time: "3 hrs"},
  {id: 5, time: "1 hr"},
  {id: 6, time: "30 min"},
  {id: 7, time: "15 min"},
  {id: 8, time: "5 min"},
  {id: 9, time: "3min"}

]
export const FullChartView =({subTabSelected}) =>{
  const {indices_data, lightMode} = useStockContext()
  
  return (
    <motion.div 
          initial={{opacity:0, x:-250}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8, easings:"easeout"}}
        className="flex flex-col gap-5 border-none border-white w-[93%] min-h-screen m-auto -z-10">
      
      <div id="historical bar" className="flex flex-col gap-2 bg-transparent border-none border-white ">
        <p className={`text-2xl font-sm ${lightMode ? "text-gray-600" : "text-[cyan]"}`}>Historical Performance Timeline</p>

        <div className="flex flex-wrap items-center gap-1">
          {historical_range.map((timespan) => (
              <div key={timespan.id} className={`${lightMode ? "bg-white/80" : " bg-gray-800"} text-green-400 text-md w-18 h-12 p-2 rounded-xs cursor-default ${lightMode ? "hover:ring-gray-400 hover:ring-offset-gray-400" : "hover:ring-offset-gray-700 hover:ring-gray-700"} hover:ring-2 hover:ring-offset-2 `}>{timespan.time}</div>
          ))}
      </div>
      </div>
      <div id="full chart" className="border-none border-white min-h-[60vh]">
          {subTabSelected === "Line" && <LineChart />}
          {subTabSelected === "Stream" && <StreamChart />}
          {subTabSelected === "Pie" && <PieChart />}
          
        
      </div>
      <div id="index price" className={` ${lightMode ? "bg-white/80" : "bg-gray-800"} border-none border-white h-[50vh] overflow-y-auto mb-2`}>
        <div className={` ${lightMode ? "text-gray-400 bg-white/80 " :"text-white"} font-medium sm:text-xl flex justify-between p-4 sticky top-0 bg-gray-800`}>
          <p>Index symbol</p>
          <p>Current price</p>
          <p>Margin</p>
        </div>

            {indices_data.map((index) => (
              <div className={`flex justify-between ${lightMode ? "bg-white/80" : "bg-gray-700"} my-2 p-4`}>
                <p className={`${lightMode ? "text-gray-500" : "text-white"} font-medium md:text-[20px]`}>{index.symbol}</p>
                <p className="text-green-400 font-medium md:text-[18px]">{index.current_value}</p>
                <p className="text-[#ff5733] font-medium md:text-[18px]">{index.change}</p>
              </div>
            ))}
          
      </div>
    </motion.div>
  )
}