import { useNavigate } from "react-router-dom"
import { useStockContext } from "../../Context/StockContext"

export const StockCard = (props) => {
  const {lightMode} = useStockContext();

  const navigate = useNavigate()

  const handleNavigation = () =>{
    navigate(`/details/${props.symbol}`)
  }
  return (
    <div className={` ${lightMode ? "bg-white/80" : "bg-gray-800"} shadow-sm p-2 m-auto w-[100%] h-[180px] cursor-default flex flex-col gap-5`}>
      <h3 className={` ${lightMode ? "text-gray-600" : "text-green-400"} w-[100%] border-none text-md md:text-lg lg:text-xl text-center font-bold `}>{props.symbol}</h3>

      <div className="flex justify-evenly w-[70%] md:w-[90%] m-auto">
        <div className={`text-xs font-medium ${lightMode ? "text-gray-500" : "text-white"} md:font-bold`}>$ {props.price}</div>
        <div className="text-xs align-baseline font-light md:text-sm text-green-400 md:font-medium">{props.change}</div>
      </div>
      <div onClick={handleNavigation} className="p-1 rounded-xs text-[16px] shadow-sm bg-[#9013fe] mt-4 text-center w-[98%] m-auto cursor-pointer text-white  ">See details</div>
    </div>
  )
}