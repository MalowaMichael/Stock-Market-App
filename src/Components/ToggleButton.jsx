import { useStockContext } from "../Context/StockContext"

export const ToggleButton = ({onClick}) =>{
  const {on, setOn, lightMode} = useStockContext()
  return (
    <div className="relative  border-none border-white w-[15%]  md:w-[7%] " onClick={onClick}>
      <span onClick={() => setOn(!on)} className={`absolute ${on ? "ml-6 md:ml-8 bg-white border border-purple-700" :"ml-1"} left-0 my-1 h-3 w-3 rounded-sm bg-white transition-ease transform duration-800 bg-[cyan] z-20`}></span>
      <div className={`group ${lightMode ? on ? "bg-purple-700":"bg-gray-500" : on ? "bg-[cyan]" :"bg-gray-500"} rounded-md h-5 relative z-10 p-1`}></div>

    </div>
  )
}