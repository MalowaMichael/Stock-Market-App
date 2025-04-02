import { IoArrowDownOutline } from "react-icons/io5";
import { IoArrowUpOutline } from "react-icons/io5";
import { IndexChart } from "../Charts/IndexChart/IndexChart";
import { useStockContext } from "../../Context/StockContext";

export const Indexcard = ({index}) =>{
  const {lightMode} = useStockContext()
  return (
    <div className={`border-none border-white ${lightMode ? "bg-white/80 shadow-sm" :"bg-gray-800"}  `}>
      <p className={` text-md lg:text-lg font-medium ${lightMode ? "text-gray-600" :"text-green-400"} h-[50px] pl-[8%] pb-4 `}>{index.name}</p>
      <div className="bg-[transparent] ">
        <p className={`text-md lg:text-lg font-medium ${lightMode ? "text-gray-400" : "text-white"}  my-2 pl-[8%]`}>{index.current_value}</p>
        <div className={`flex ${lightMode ? "text-gray-400" :"text-white"}  items-start gap-4 border-none pl-[7%]`}>
          <IoArrowDownOutline className="align-baseline h-5 w-5 translate-y-1"/>
          <p>{index.market_open}</p>
        </div>
      </div>

      <div id="index-chart" className="border-none border-green-400 h-[150px] p-1 mt-2">
        <IndexChart index={index} indexData={index.data}/>
      </div>

    </div>
  )
}